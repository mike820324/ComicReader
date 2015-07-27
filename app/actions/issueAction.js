import urlParser from "url";
import alt from "../alt";

import comicvipParser from "../lib/parser/comicvip";
import dmedenParser from "../lib/parser/dmeden";
import ninenineParser from "../lib/parser/ninenineComic";


class IssueAction {
    fetchImage(url) {
        this.dispatch();

        if(urlParser.parse(url).hostname.includes("comicvip.com")) {
            comicvipParser.getImageLinks(url)
            .then(images => {
                this.actions.updateImage(images);
            });
        }

        if(urlParser.parse(url).hostname.includes("dmeden.net")) {
            dmedenParser.getImageLinks(url)
            .then(images => {
                this.actions.updateImage(images);
            });
        }

        if(urlParser.parse(url).hostname.includes("99comic.com")) {
            ninenineParser.getImageLinks(url)
            .then(images => {
                this.actions.updateImage(images);
            });
        }
    }

    toggleViewerMode() {
        this.dispatch();
    }

    updateImage(images) {
        this.dispatch(images);
    }

    updateIndex(index) {
        this.dispatch(index);
    }

    nextPage() {
        this.dispatch();
    }

    prevPage() {
        this.dispatch();
    }
}

export default alt.createActions(IssueAction);
