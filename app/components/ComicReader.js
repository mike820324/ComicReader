import React from "react";

import issueStore from "../stores/issueStore";

// import compoenents
import SearchBar from "./SearchBar";
import IssueViewer from "./IssueViewer";


var ComicReader = React.createClass({
    displayName: "ComicReader",

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
            <div >
                {
                    this.state.viewerIsOpen ?
                        <IssueViewer
                            viewerMode={this.state.viewerMode}
                            issueInfo={this.state.issueInfo}
                            currentIndex={this.state.currentIndex}
                            imageLoadRange={this.state.imageLoadRange}
                        /> :
                        <SearchBar mode={this.state.viewerMode}/>
                }
            </div>
        );
    }
});

export default ComicReader;

