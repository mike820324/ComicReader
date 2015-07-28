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

    render() {
        const containerStyle = {
            width: "100%",
            position: "fixed",
            left: "5%",
            top: "35%"
        };

        const titleStyle = {
            textAlign: "center"
        };

        const barContainerStyle = {
            padding: "5px 10px 5px 10px",
            width: "100%"
        };

        const inputStyle = {
            position: "relative",
            left: "10%",
            width: "80%",
            padding: "5px",
            marginBottom: "15px",
            fontSize: "medium"
        };

        const fetchButtonStyle = {
            display: "block",
            position: "relative",
            left: "80%",
            width: "10%",
            height: "32px",
            borderWidth: "0.1em"
        };

        return (
            <div style={containerStyle}>
                <h1 style={titleStyle}> Comic Reader </h1>
                <div style={barContainerStyle}>
                    <input ref="input_url" type="text" onFocus={this.pasteFromClipboard} style={inputStyle}/>
                    <button onClick={this.onClickHandler} style={fetchButtonStyle}> Fetch </button>
                </div>
            </div>
        );
    }
});

export default HeaderBar;
