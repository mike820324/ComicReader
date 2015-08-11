import React from "react";

import IssueList from "./IssueList";

var ComicInfoViewer = React.createClass({
    displayName: "ComicInfoViewer",
    propTypes: {
        name: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        issueList: React.PropTypes.array.isRequired
    },

    render() {
        const titleStyle = {
            color: "white",
            textAlign: "center"
        };

        const issueListStyle = {
            position: "relative",
            top: "10%",
            height: "50%",
            width: "100%",
            overflow: "scroll"
        };

        return (
            <div>
                <h1 style={titleStyle}> {this.props.name} </h1>
                <h1 style={titleStyle}> {this.props.author} </h1>
                <h1 style={titleStyle}> Issue List </h1>
                <div style={issueListStyle}>
                    <IssueList issues={this.props.issueList} />
                </div>
            </div>
        );
    }
});

export default ComicInfoViewer;
