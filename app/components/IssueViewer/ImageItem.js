import React from "react";
import _ from "underscore";

import issueAction from "../../actions/issueAction";

var ImageItem = React.createClass({
    displayName: "ImageItem",
    propTypes: {
        index: React.PropTypes.number.isRequired,
        imageSrc: React.PropTypes.string.isRequired,
        display: React.PropTypes.bool.isRequired
    },

    handleLoad(e) {
        issueAction.updateImageHeight({
            index: this.props.index,
            height: e.target.offsetHeight
        });
    },

    render() {
        const imageStyle = {
            display: this.props.display ? "block" : "none",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto"
        };

        return (
            <img
                key={_.last(this.props.imageSrc.split("/"))}
                src={this.props.imageSrc}
                style={imageStyle}
                onLoad={this.handleLoad}
                />
        );
    }
});

export default ImageItem;
