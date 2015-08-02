import React from "react";

import viewerStore from "../stores/viewerStore";
import issueStore from "../stores/issueStore";
import comicStore from "../stores/comicStore";

// import compoenents
import Viewer from "./Viewer";
import SearchBar from "./SearchBar";
import IssueViewer from "./IssueViewer/IssueViewer";
import ComicInfoViewer from "./ComicInfoViewer/ComicInfoViewer";


var ComicReader = React.createClass({
    displayName: "ComicReader",

    getInitialState() {
        const states = {
            viewerStatus: viewerStore.getState(),
            issueViewer: issueStore.getState(),
            comicInfoViewer: comicStore.getState()
        };
        return states;
    },

    componentDidMount() {
        viewerStore.listen(this.viewerStatusChange);
        issueStore.listen(this.issueViewerChange);
        comicStore.listen(this.comicInfoViewerChange);
    },

    componentWillUnmount() {
        viewerStore.unlisten(this.viewerStatusChange);
        issueStore.unlisten(this.issueViewerChange);
        comicStore.unlisten(this.comicInfoViewerChange);
    },

    issueViewerChange(state) {
        this.setState({issueViewer: state});
    },

    comicInfoViewerChange(state) {
        this.setState({comicInfoViewer: state});
    },

    viewerStatusChange(state) {
        this.setState({viewerStatus: state});
    },

    render() {
        let renderPage = null;
        if(this.state.viewerStatus.viewerType === "IssueViewer") {
            renderPage = (
                <IssueViewer
                    viewerMode={this.state.issueViewer.viewerMode}
                    issueInfo={this.state.issueViewer.issueInfo}
                    currentIndex={this.state.issueViewer.currentIndex}
                    imageLoadRange={this.state.issueViewer.imageLoadRange}
                />
            );
        } else if(this.state.viewerStatus.viewerType === "ComicInfoViewer") {
            renderPage = (
                <ComicInfoViewer
                    issueList={this.state.comicInfoViewer.issueList}
                />
            );
        } else {
            renderPage = <SearchBar mode={this.state.issueViewer.viewerMode}/>;
        }

        return (
            <Viewer>
                {renderPage}
            </Viewer>
        );
    }
});

export default ComicReader;
