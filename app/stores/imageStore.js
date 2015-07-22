import alt from "../alt";

import imageAction from "../actions/imageAction";

class ImageStore {
    constructor() {
        this.images = [];

        this.bindListeners({
            updateImage: imageAction.updateImage
        });
    }

    updateImage(images) {
        this.images = images;
    }
}


export default alt.createStore(ImageStore);

