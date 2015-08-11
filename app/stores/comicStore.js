import alt from "../alt";

import ComicAction from "../actions/comicAction";

class ComicStore {
    constructor() {
        this.name = "";
        this.author = "";
        this.isEnd = false;
        this.type = null;
        this.issueList = [];

        this.bindListeners({
            updateComicInfo: ComicAction.updateComicInfo
        });
    }

    updateComicInfo(info) {
        this.name = info.comicInfo.name;
        this.author = info.comicInfo.author;
        this.isEnd = info.comicInfo.isEnd;
        this.type = info.comicInfo.type;
        this.issueList = info.issueInfo.issueList;
    }
}

export default alt.createStore(ComicStore);
