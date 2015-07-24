import baseParser from "./base";

class NinenineParser extends baseParser {
    constructor() {
        super();

        /* possible domain for 99comic */
        this.sDs = "http://99.1112223333.com/dm01/|" +
        "http://99.1112223333.com/dm02/|" +
        "http://99.1112223333.com/dm03/|" +
        "http://99.1112223333.com/dm04/|" +
        "http://99.1112223333.com/dm05/|" +
        "http://99.1112223333.com/dm06/|" +
        "http://99.1112223333.com/dm07/|" +
        "http://99.1112223333.com/dm08/|" +
        "http://99.1112223333.com/dm09/|" +
        "http://99.1112223333.com/dm10/|" +
        "http://99.1112223333.com/dm11/|" +
        "http://99.1112223333.com/dm12/|" +
        "http://99.1112223333.com/dm13/|" +
        "http://173.231.57.238/dm14/|" +
        "http://99.1112223333.com/dm15/|" +
        "http://142.4.34.102/dm16/";
    }

    getSLUrl(s, arrDS) {
        return s <= arrDS.length ?
            arrDS[s - 1] :
            "";
    }

    parseVariable($) {
        /* parsing the necessary variables */
        const targetNode = $("script")[0].children[0].data;
        const ast = this.parseScript(targetNode);

        let variables = {};
        for( let i of ast.body) {
            if( i.type === "VariableDeclaration") {
                const name = i.declarations[0].id.name;
                const value = i.declarations[0].init.value;
                variables[name] = value;
            }
        }

        return variables;
    }

    getImageLinks(urlLink) {
        return this.request(urlLink)
        .then( response => {
            const $ = this.parseHtml(response, "big5");
            const variables = this.parseVariable($);
            const sFiles = variables.sFiles;
            const sPath = variables.sPath;
            const arrFiles = sFiles.split("|");
            const arrDS = this.sDs.split("|");

            const baseDomain = this.getSLUrl(sPath, arrDS);

            const imageLinks = arrFiles.map( link => {
                return baseDomain + link;
            });

            return imageLinks;
        });
    }
}

export default new NinenineParser();
