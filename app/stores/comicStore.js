import alt from "../alt";

import ComicAction from "../actions/comicAction";

class ComicStore {
    constructor() {
        this.comicName = "";
        this.author = "";
        this.end = false;
        this.issueList = [];

        this.bindListeners({
            updateComicInfo: ComicAction.updateComicInfo
        });
    }

    updateComicInfo(comicInfo) {
        this.issueList = comicInfo.issueInfo.issueList;
    }
}

export default alt.createStore(ComicStore);
