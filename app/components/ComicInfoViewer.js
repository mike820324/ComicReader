import React from "react";

// import compoenents
import IssueList from "./IssueList";
import viewerAction from "../actions/viewerAction";


var ComicInfoViewer = React.createClass({
    displayName: "ComicInfoViewer",
    propTypes: {
        issueList: React.PropTypes.array.isRequired
    },

    handleClose() {
        viewerAction.closeViewer();
    },

    render() {
        const closeButtonStyle = {
            position: "absolute",
            top: "0px",
            right: "0px",
            background: "black",
            color: "white",
            borderStyle: "none",
            fontSize: "larger"
        };

        const titleStyle = {
            color: "white",
            textAlign: "center"
        };

        const comicInfoViewerStyle = {
            background: "black",
            position: "relative",
            height: "100%",
            overflow: "scroll",
            width: "100%"
        };

        return (
            <div style={comicInfoViewerStyle}>
                <button onClick={this.handleClose} style={closeButtonStyle}> X </button>
                <h1 style={titleStyle}> Issue List </h1>
                <IssueList issues={this.props.issueList} />
            </div>
        );
    }
});

export default ComicInfoViewer;
