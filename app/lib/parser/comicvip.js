import _ from "underscore";
import baseParser from "./base";

class ComicvipParser extends baseParser {
    constructor() {
        super();
        this.issueMagic = "#Form1 > script";
    }

    getIssueInfo(url) {
        return this.request(url)
        .then(response => {
            const $ = this.parseHtml(response);
            const urlObject = this.parseUrl(url);

            const issueNum = urlObject.query.ch;
            const images = this.getImageLinks($, issueNum);

            return {
                issueNum: issueNum,
                images: images
            };
        });
    }

    getImageLinks($, ch) {
        const element = $("script");
        const length = element.length;
        const ast = this.parseScript(element[length - 2].children[0].data);
        const variables = {};
        for( let i of ast.body) {
            if( i.type === "VariableDeclaration") {
                const name = i.declarations[0].id.name;
                const value = i.declarations[0].init.value;
                variables[name] = value;
            }
        }

        const issueMagic = this.getIssueMagic(variables.cs, ch);
        const pageNum = this.getPageNum(issueMagic);
        const images = _.range(pageNum).map((number) => {
            return this.getImageUrl(issueMagic, variables.ti, number + 1);
        });
        return images;
    }

    getIssueMagic(cs, ch) {
        var f = 50;
        var cc = cs.length;
        var issueMagic;
        for (var i = 0; i < cc / f; i++) {
            if (this.ss(cs, i * f, 4) === ch) {
                issueMagic = this.ss(cs, i * f, f, f);
                break;
            }
        }

        if (issueMagic === "") {
           issueMagic = this.ss(cs, cc - f, f);
        }

        return issueMagic;
    }

    getPageNum(issueMagic) {
        return this.ss(issueMagic, 7, 3); // page number
    }

    getImageUrl(issueMagic, ti, p) {
        let f = 50;
        return "http://img"
               + this.ss(issueMagic, 4, 2)
               + ".8comic.com/"
               + this.ss(issueMagic, 6, 1)
               + "/"
               + ti
               + "/"
               + this.ss(issueMagic, 0, 4)
               + "/"
               + this.nn(p)
               + "_"
               + this.ss(issueMagic, this.mm(p) + 10, 3, f)
               + ".jpg";
    }

    ss(a, b, c, d) {
        let e = a.substring(b, b + c);
        return d === undefined ? e.replace(/[a-z]*/gi, "") : e;
    }

    nn(n) {
        return n < 10 ? "00" + n : n < 100 ? "0" + n : n;
    }

    mm(p) {
        return (parseInt((p - 1) / 10) % 10) + (((p - 1) % 10) * 3);
    }

}

export default new ComicvipParser();
