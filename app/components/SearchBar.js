import React from "react";
import clipboard from "clipboard";

import issueAction from "../actions/issueAction";

var HeaderBar = React.createClass({
    displayName: "HeaderBar",

    propTypes: {
        mode: React.PropTypes.string.isRequired
    },

    onClickHandler() {
        const node = this.refs.input_url.getDOMNode();
        const url = node.value;
        node.value = "";
        issueAction.fetchImage(url);
    },

    pasteFromClipboard() {
        const clipboardText = clipboard.readText();
        const node = this.refs.input_url.getDOMNode();
        node.value = clipboardText;
    },

    toggleViewerMode() {
        issueAction.toggleViewerMode();
    },

    render() {
        const containerStyle = {
            width: "90%",
            position: "relative",
            left: "5%"
        };

        const titleStyle = {
            textAlign: "center",
            margin: "0px"
        };

        const barContainerStyle = {
            padding: "5px 10px 5px 10px",
            position: "relative"
        };

        const inputStyle = {
            width: "75%",
            padding: "5px",
            fontSize: "medium"
        };

        const fetchButtonStyle = {
            position: "absolute",
            width: "10%",
            height: "32px",
            borderWidth: "0.1em"
        };

        const toggleButtonStyle = {
            position: "absolute",
            right: "0px",
            width: "10%",
            height: "32px",
            background: "white",
            borderRadius: "5px",
            borderWidth: "0.1em"
        };

        return (
            <div style={containerStyle}>
                <h1 style={titleStyle}> Comic Reader </h1>
                <div style={barContainerStyle}>
                    <input ref="input_url" type="text" onFocus={this.pasteFromClipboard} style={inputStyle}/>
                    <button onClick={this.onClickHandler} style={fetchButtonStyle}> Fetch </button>
                    <button onClick={this.toggleViewerMode} style={toggleButtonStyle}> {this.props.mode} </button>
                </div>
            </div>
        );
    }
});

export default HeaderBar;
