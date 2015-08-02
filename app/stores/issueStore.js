import alt from "../alt";

import issueAction from "../actions/issueAction";

const stepSize = 6;

class IssueStore {
    constructor() {
        this.viewerMode = "scroll";
        this.currentIndex = 0;
        this.imageLoadRange = stepSize;

        // will be fetch from website
        this.issueInfo = undefined;
        this.imagesHeight = {};
        this.scrollHeight = 0;

        // binding the actions and store handler
        this.bindListeners({
            toggleViewerMode: issueAction.toggleViewerMode,
            updateIssueInfo: issueAction.updateIssueInfo,
            updateIndex: issueAction.updateIndex,
            handleNextPage: issueAction.nextPage,
            handlePrevPage: issueAction.prevPage,
            handlScroll: issueAction.updateScrollHeight,
            updateImageHeight: issueAction.updateImageHeight
        });
    }

    updateIssueInfo(issueInfo) {
        this.currentIndex = 0;
        this.imageLoadRange = stepSize;
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

    handlScroll(currentHeight) {
        this.scrollHeight = currentHeight;
        let height = 0;

        for(let index = 0; index < this.issueInfo.images.length; index++ ) {
            if(this.imagesHeight[index] !== undefined ) {
                height += this.imagesHeight[index];
                if( currentHeight <= height) {
                    if(index !== this.currentIndex) {
                        this.updateIndex(index);
                    }
                    break;
                }
            }
        }
    }

    updateImageHeight(info) {
        this.imagesHeight[info.index] = info.height;
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

