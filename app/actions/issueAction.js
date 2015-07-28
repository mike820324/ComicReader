import urlParser from "url";
import alt from "../alt";

import comicvipParser from "../lib/parser/comicvip";
import dmedenParser from "../lib/parser/dmeden";
import ninenineParser from "../lib/parser/ninenineComic";


class IssueAction {
    fetchImage(url) {
        this.dispatch();

        if(urlParser.parse(url).hostname.includes("comicvip.com")) {
            comicvipParser.getIssueInfo(url)
            .then(issueInfo => {
                this.actions.updateImage(issueInfo.images);
            });
        }

        if(urlParser.parse(url).hostname.includes("dmeden.net")) {
            dmedenParser.getIssueInfo(url)
            .then(issueInfo => {
                this.actions.updateImage(issueInfo.images);
            });
        }

        if(urlParser.parse(url).hostname.includes("99comic.com")) {
            ninenineParser.getIssueInfo(url)
            .then(issueInfo => {
                this.actions.updateImage(issueInfo.images);
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
