import alt from "../alt";
import viewerAction from "../actions/viewerAction";

class viewerStore {
    constructor() {
        this.viewerType = "default";
        this.viewerStack = [];

        this.bindListeners({
            handleOpenViewer: viewerAction.openViewer,
            handleCloseViewer: viewerAction.closeViewer
        });
    }

    handleOpenViewer(newViewerType) {
        this.viewerStack.push(this.viewerType);
        this.viewerType = newViewerType;
    }

    handleCloseViewer() {
        this.viewerType = this.viewerStack.pop();
    }
}

export default alt.createStore(viewerStore);
