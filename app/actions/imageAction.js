import urlParser from "url";
import alt from "../alt";

import comicvipParser from "../lib/parser/comicvip";
import dmedenParser from "../lib/parser/dmeden";


class ImageAction {
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
    }

    updateImage(images) {
        this.dispatch(images);
    }
}

export default alt.createActions(ImageAction);
