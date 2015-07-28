import _ from "underscore";
import Promise from "bluebird";
import path from "path";
import urlParse from "url";

import baseParser from "./base";

class DmedenParser extends baseParser {
    unsuan(s, hostname) {
        /* magic function for dmeden */
        const sw = "jmmh.net|dmeden.com|dmeden.net";
        const su = hostname.toLowerCase();
        let b = false;

        for(let i = 0; i < sw.split("|").length; i++) {
            if(su.indexOf(sw.split("|")[i]) > -1) {
                b = true;
                break;
            }
        }

        if(!b) {
            return "";
        }

        const x = s.substring(s.length - 1);
        const w = "abcdefghijklmnopqrstuvwxyz";
        const xi = w.indexOf(x) + 1;
        const sk = s.substring(s.length - xi - 12, s.length - xi - 1);

        s = s.substring(0, s.length - xi - 12);
        const k = sk.substring(0, sk.length - 1);
        const f = sk.substring(sk.length - 1);

        for(let i = 0; i < k.length; i++){
            const exprStr = k.substring(i, i + 1);
            const re = new RegExp(exprStr, "g");
            s = s.replace(re, i.toString());
        }
        const ss = s.split(f);

        s = "";
        for(let i = 0; i < ss.length; i++){
            s += String.fromCharCode(ss[i]);
        }
        return s;
    }

    getImageDomainArray($) {
        /* the arrDs field */
        const node = $("#hdDomain");
        return node.attr("value").split("|");
    }

    getIssueUniqueId($) {
        /* the sID field */
        const sIDNode = $("#hdVolID");
        return sIDNode.attr("value");
    }

    getImageNode($) {
        /* get current image node by id */
        const ids = [
            "#img1021",
            "#img2391",
            "#img7652",
            "imgCurr"
        ];

        const curImg = ids.map(function(id) {
            return $(id);
        }).filter(function(element){
            return element.attr("name") !== undefined;
        });

        return curImg;
    }

    getPageNum($) {
        /* get the page number for this issue */
        return $("div#iPageHtm > a").length;
    }

    getImgLink(urlLink) {
        /* get image link for this url */
        return this.request(urlLink)
        .then( response => {
            const url = this.parseUrl(urlLink);
            const $ = this.parseHtml(response);

            const arrDs = this.getImageDomainArray($);
            const curImg = this.getImageNode($)[0].attr("name");

            const cuDomainNo = url.query.d === undefined ? "0" : url.query.d;
            const sCuDomain = arrDs.length === 1 ? arrDs[0] : arrDs[cuDomainNo];


            const imgLink = sCuDomain + this.unsuan(curImg, url.hostname);
            return imgLink;
        });
    }

    getIssueInfo(urlLink) {
        return this.request(urlLink)
        .then( response => {
            const url = this.parseUrl(urlLink);
            const $ = this.parseHtml(response);

            const issueNum = $("title")[0].children[0].data.split(" ")[1];
            const imagesPromise = this.getImageLinks($, url);
            return imagesPromise.then(images => {
                return {
                    issueNum: issueNum,
                    images: images
                };
            });

        });
    }

    getImageLinks($, url) {
        const pageNum = this.getPageNum($);
        const sID = this.getIssueUniqueId($);

        const s = url.query.s;
        const cuDomainNo = url.query.d === undefined ? "0" : url.query.d;

        const imgLinks = _.range(pageNum).map( num => {
            const page = num + 1;

            const newUrl = url;
            newUrl.pathname = path.join(url.pathname, "../..", sID, `${page}.html`);
            newUrl.query = {
                s: s,
                d: cuDomainNo
            };
            return urlParse.format(newUrl);
        });

        const finalLinks = Promise.map(imgLinks, link => {
            return this.getImgLink(link)
            .then(imgLink => {
                return imgLink;
            });
        });

        return finalLinks;
    }
}

export default new DmedenParser();
