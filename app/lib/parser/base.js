// limit the max connctions of one domain
import http from "http";
import https from "https";
http.globalAgent.maxSockets = 10;
https.globalAgent.maxSockets = 10;

import request from "request";

import charset from "charset";
import iconv from "iconv-lite";
import whacko from "whacko";
import esprima from "esprima";
import urlParse from "url";

import Promise from "bluebird";

class baseParser {
    // return a promise of a request
    request(url) {
        return new Promise((fulfill, reject) => {
            request.get({
                    url: url,
                    encoding: null
                }, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        fulfill({header: response.headers, data: body});
                    }
                });
        });
    }

    // return cheerio object
    parseHtml(response, defaultEncoding) {
        // guess the encoding and decode it
        const encoding = defaultEncoding !== undefined ?
            defaultEncoding :
            charset(response.header, response.data);

        const encodeBuffer = iconv.decode(response.data, encoding);

        // html parsing
        const $ = whacko.load(encodeBuffer, {encodeEntities: false});
        return $;
    }

    // return the ast tree of a pure javascript
    parseScript(rawData) {
        return esprima.parse(rawData);
    }

    parseUrl(url) {
        return urlParse.parse(url, true);
    }
}

export default baseParser;
