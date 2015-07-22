import React from "react";
import clipboard from "clipboard";

import imageAction from "../actions/imageAction";

var HeaderBar = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func.isRequired
    },

    onClickHandler() {
        const node = this.refs.input_url.getDOMNode();
        const url = node.value;
        node.value = "";
        imageAction.fetchImage(url);
        // this.props.onClick(url);
    },

    pasteFromClipboard() {
        const clipboardText = clipboard.readText();
        const node = this.refs.input_url.getDOMNode();
        node.value = clipboardText;
    },

    render() {
        return (
            <div>
                <h1> Comic Reader </h1>
                <input ref="input_url" type="text" onFocus={this.pasteFromClipboard}/>
                <button onClick={this.onClickHandler}> Fetch </button>
            </div>
        );
    }
});

export default HeaderBar;
