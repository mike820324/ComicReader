import alt from "../alt";

import imageAction from "../actions/imageAction";

const stepSize = 6;

class ImageStore {
    constructor() {
        this.currentIndex = 0;
        this.imageLoadRange = stepSize;
        this.images = [];

        this.bindListeners({
            updateImage: imageAction.updateImage,
            handleNextPage: imageAction.nextPage,
            handlePrevPage: imageAction.prevPage
        });
    }

    updateImage(images) {
        this.currentIndex = 0;
        this.images = images;
    }

    handleNextPage() {
        const currentPage = this.currentIndex + 1;
        if( currentPage < this.images.length) {
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

        this.imageLoadRange = loadRange;
    }
}


export default alt.createStore(ImageStore);

