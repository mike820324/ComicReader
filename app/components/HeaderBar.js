import React from "react";
import clipboard from "clipboard";

import imageAction from "../actions/imageAction";

var HeaderBar = React.createClass({
    displayName: "HeaderBar",
    onClickHandler() {
        const node = this.refs.input_url.getDOMNode();
        const url = node.value;
        node.value = "";
        imageAction.fetchImage(url);
    },

    pasteFromClipboard() {
        const clipboardText = clipboard.readText();
        const node = this.refs.input_url.getDOMNode();
        node.value = clipboardText;
    },

    render() {
        const containerStyle = {
            width: "90%",
            position: "relative",
            left: "5%"
        };

        const titleStyle = {
            textAlign: "center"
        };

        const barContainerStyle = {
            padding: "5px 10px 5px 10px",
            position: "relative"
        };

        const inputStyle = {
            width: "90%",
            padding: "5px",
            fontSize: "medium"
        };

        const buttonStyle = {
            position: "absolute",
            right: "5px",
            width: "8%",
            height: "32px",
            borderRadius: "5px"
        };

        return (
            <div style={containerStyle}>
                <h1 style={titleStyle}> Comic Reader </h1>
                <div style={barContainerStyle}>
                    <input ref="input_url" type="text" onFocus={this.pasteFromClipboard} style={inputStyle}/>
                    <button onClick={this.onClickHandler} style={buttonStyle}> Fetch </button>
                </div>
            </div>
        );
    }
});

export default HeaderBar;
