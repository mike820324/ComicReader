import React from "react";
import _ from "underscore";

var ImageItem = React.createClass({
    displayName: "ImageItem",
    propTypes: {
        imageSrc: React.PropTypes.string.isRequired,
        display: React.PropTypes.bool.isRequired
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
                style={imageStyle}/>
        );
    }
});

export default ImageItem;
