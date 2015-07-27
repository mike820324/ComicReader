import React from "react";

import issueStore from "../stores/issueStore";

// import compoenents
import SearchBar from "./SearchBar";
import ImageViewer from "./ImageViewer";
import PageNavigator from "./PageNavigator.js";

var IssueViewer = React.createClass({
    displayName: "IssueViewer",

    getInitialState() {
        return issueStore.getState();
    },

    componentDidMount() {
        issueStore.listen(this.onChange);
    },

    componentWillUnmount() {
        issueStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },

    render() {
        return (
            <div>
                <SearchBar mode={this.state.viewerMode}/>
                <ImageViewer
                    mode={this.state.viewerMode}
                    images={this.state.images}
                    currentIndex={this.state.currentIndex}
                    imageLoadRange={this.state.imageLoadRange}
                />
                {this.state.viewerMode === "click" ? <PageNavigator /> : null}

            </div>
        );
    }
});

export default IssueViewer;

