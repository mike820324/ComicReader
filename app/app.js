import React from 'react';

// this should be moved away from app.js
import request from 'request';
import whacko from 'whacko'
import charset from 'charset';
import iconv from 'iconv-lite';
import esprima from 'esprima';

// import compoenents
import HeaderBar from './components/HeaderBar';
import ImageList from './components/ImageList';

var ComicReader = React.createClass({
    getInitialState() {
        return {
            url: null,
            imageLink: []
        }
    },

    parseHtml(response) {
        // guess the encoding and decode it
        let encoding = charset(response.header, response.data);
        let encodeBuffer = iconv.decode(response.data, encoding);

        // html parsing
        let $ = whacko.load(encodeBuffer, {encodeEntities:false});
        return $;
    },
    
    // return the ast tree of a pure javascript
    parseScript(rawData) {
        return esprima.parse(rawData);
    },

    getIssueMagic(cs, ch) {
        let f = 50;
        let cc = cs.length;
        let issueMagic;
        for (let i = 0; i < cc / f; i++) {
            if (this.ss(cs, i * f, 4) == ch) {
                issueMagic = this.ss(cs, i * f, f, f);
                break;
            }
        }

        if (issueMagic == '') {
           issueMagic = this.ss(cs, cc - f, f);
        }

        return issueMagic;
    },

    getPageNum(issueMagic) {
        return this.ss(issueMagic, 7, 3); // page number

    },
    
    getImageUrl(issueMagic, ti, p) {
        let f = 50;
        return 'http://img' 
               + this.ss(issueMagic, 4, 2) 
               + '.8comic.com/' 
               + this.ss(issueMagic, 6, 1) 
               + '/' 
               + ti 
               + '/' 
               + this.ss(issueMagic, 0, 4) 
               + '/' 
               + this.nn(p) 
               + '_' 
               + this.ss(issueMagic, this.mm(p) + 10, 3, f) 
               + '.jpg';
    },

    ss(a, b, c, d) {
        let e = a.substring(b, b + c);
        return d == null ? e.replace(/[a-z]*/gi, '')  : e;
    },
    
    nn(n) {
        return n < 10 ? '00' + n : n < 100 ? '0' + n : n;
    },
    
    mm(p) {
        return (parseInt((p - 1) / 10) % 10) + (((p - 1) % 10) * 3);
    },
    getUrl(url) {
        this.setState({url: url});
    },
    componentDidUpdate() {
        if(this.state.url !== null) {
        let url = this.state.url;
        request.get({
            url: url,
            encoding: null
        }, (err, resp, body) => {
            let response = {
                header: resp,
                data: body
            }
            let $ = this.parseHtml(response);
            let element = $('script');
            let ast = this.parseScript(element[10].children[0].data);
            let variables = {};
            for( let i of ast.body) {
                if( i.type == 'VariableDeclaration') {
                    let name = i.declarations[0].id.name;
                    let value = i.declarations[0].init.value;
                    variables[name] = value;
                }
            }

            let ch = url.split('=')[1];
            let issueMagic = this.getIssueMagic(variables.cs, ch);
            let pageNum = this.getPageNum(issueMagic);
            let images = [];

            for(let j = 0; j < pageNum; j++) {
                var imageUrl = this.getImageUrl(issueMagic, variables.ti, j+1);
                images.push(imageUrl);
            }

            this.setState({imageLink: images});
        }.bind(this));
        }
    },

    render() {
        return(
            <div>
                <HeaderBar onClick={this.getUrl}/>
                <ImageList images={this.state.imageLink} />
                <h1> This is Footer </h1>
            </div>
        );
    }
});

React.render(
    <ComicReader />,
    document.getElementById('app')
);

