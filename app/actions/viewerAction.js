import alt from "../alt";

class ViewerAction {
    openViewer(viewerType) {
        this.dispatch(viewerType);
    }

    closeViewer() {
        this.dispatch();
    }
}


export default alt.createActions(ViewerAction);
