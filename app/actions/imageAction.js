import alt from "../alt";

import comicvipParser from "../lib/parser/comicvip";


class ImageAction {
    fetchImage(url) {
        this.dispatch();

        comicvipParser.getImageLinks(url)
        .then(images => {
            this.actions.updateImage(images);
        });

    }

    updateImage(images) {
        this.dispatch(images);
    }
}

export default alt.createActions(ImageAction);
