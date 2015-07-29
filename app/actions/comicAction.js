import alt from "../alt";
import urlParser from "url";

import viewerAction from "./viewerAction";
// import comicvipParser from "../lib/parser/comicvip";
// import dmedenParser from "../lib/parser/dmeden";
import ninenineParser from "../lib/parser/ninenineComic";

class ComicAction {
    fetchComicInfo(url) {
        this.dispatch();

        // if(urlParser.parse(url).hostname.includes("comicvip.com")) {
        //     comicvipParser.getIssueInfo(url)
        //     .then(issueInfo => {
        //         this.actions.updateIssueInfo(issueInfo);
        //         this.actions.openViewer();
        //     });
        // }

        // if(urlParser.parse(url).hostname.includes("dmeden.net")) {
        //     dmedenParser.getIssueInfo(url)
        //     .then(issueInfo => {
        //         this.actions.updateIssueInfo(issueInfo);
        //         this.actions.openViewer();
        //     });
        // }

        if(urlParser.parse(url).hostname.includes("99comic.com")) {
            ninenineParser.getComicInfo(url)
            .then(comicInfo => {
                console.log(comicInfo);
                this.actions.updateComicInfo(comicInfo);
                viewerAction.openViewer("ComicInfoViewer");
            });
        }
    }

    updateComicInfo(comicInfo) {
        this.dispatch(comicInfo);
    }

}

export default alt.createActions(ComicAction);
