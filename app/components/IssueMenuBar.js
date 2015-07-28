import React from "react";

import issueAction from "../actions/issueAction";

var IssueMenuBar = React.createClass({
    displayName: "IssueMenuBar",
    propTypes: {
        viewerMode: React.PropTypes.string.isRequired
    },

    handleClick() {
        issueAction.toggleViewerMode();
    },

    render() {
        const menuBarStyle = {
            display: "block",
            position: "absolute",
            bottom: "0px",
            right: "0px",
            height: "4%",
            width: "100%"
        };

        const buttonStyle = {
            position: "absolute",
            right: "0.2em",
            bottom: "0.2em",
            height: "98%",
            width: "10%",
            background: "black",
            color: "white",
            borderStyle: "solid",
            borderWidth: "0.1em",
            borderRadius: "0.5em"

        };

        return (
            <div style={menuBarStyle}>
                <button style={buttonStyle} onClick={this.handleClick}> {this.props.viewerMode} </button>
            </div>
        );
    }
});

export default IssueMenuBar;
