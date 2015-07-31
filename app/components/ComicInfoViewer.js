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
        const titleStyle = {
            color: "white",
            textAlign: "center"
        };

        const issueListStyle = {
            position: "absolute",
            top: "10%",
            height: "80%",
            width: "100%",
            overflow: "scroll"
        };

        return (
            <div>
                <h1 style={titleStyle}> Issue List </h1>
                <div style={issueListStyle}>
                    <IssueList issues={this.props.issueList} />
                </div>
            </div>
        );
    }
});

export default ComicInfoViewer;
