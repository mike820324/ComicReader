import alt from "../alt";

import issueAction from "../actions/issueAction";

const stepSize = 6;

class IssueStore {
    constructor() {
        this.viewerMode = "click";
        this.currentIndex = 0;
        this.imageLoadRange = stepSize;

        // will be fetch from website
        this.issueInfo = undefined;

        // binding the actions and store handler
        this.bindListeners({
            toggleViewerMode: issueAction.toggleViewerMode,
            updateIssueInfo: issueAction.updateIssueInfo,
            updateIndex: issueAction.updateIndex,
            handleNextPage: issueAction.nextPage,
            handlePrevPage: issueAction.prevPage
        });
    }

    updateIssueInfo(issueInfo) {
        this.currentIndex = 0;
        this.issueInfo = issueInfo;
    }

    toggleViewerMode() {
        this.viewerMode = this.viewerMode === "click" ? "scroll" : "click";
    }

    updateIndex(index) {
        this.currentIndex = index;
        this.calLoadRange();
        console.log(this.currentIndex);
    }

    handleNextPage() {
        const currentPage = this.currentIndex + 1;
        if( currentPage < this.issueInfo.images.length) {
            console.log(currentPage);
            this.currentIndex = currentPage;
            this.calLoadRange();
        } else {
            console.log("End of the page");
        }
    }

    handlePrevPage() {
        const currentPage = this.currentIndex - 1;
        if( currentPage >= 0) {
            console.log(currentPage);
            this.currentIndex = currentPage;
            this.calLoadRange();
        } else {
            console.log("this is the first page");
        }
    }

    calLoadRange() {
        const pivotIndex = Math.floor(this.currentIndex / stepSize) * stepSize + ( stepSize / 2 );
        const loadRange = this.currentIndex >= pivotIndex ?
            Math.ceil( pivotIndex / stepSize) * stepSize + stepSize :
            Math.ceil( pivotIndex / stepSize) * stepSize;

        if(loadRange > this.issueInfo.images.length) {
            this.imageLoadRange = this.issueInfo.images.length;
        } else {
            this.imageLoadRange = loadRange;
        }
    }
}


export default alt.createStore(IssueStore);

