import React from "react";

import issueStore from "../stores/issueStore";

// import compoenents
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import ShiftImageList from "./ShiftImageList";

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
        const viewer = this.state.viewerMode === "click" ?
            <ShiftImageList images={this.state.images} currentIndex={this.state.currentIndex} imageLoadRange={this.state.imageLoadRange}/> :
            <ImageList images={this.state.images} currentIndex={this.state.currentIndex} imageLoadRange={this.state.imageLoadRange}/>;

        return (
            <div>
                <SearchBar mode={this.state.viewerMode}/>
                {viewer}
            </div>
        );
    }
});

export default IssueViewer;

