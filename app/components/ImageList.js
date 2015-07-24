import React from "react";
import _ from "underscore";

var ImageList = React.createClass({
    displayName: "ImageList",

    propTypes: {
        images: React.PropTypes.array.isRequired
    },

    render() {
        const containerStyle = {
            width: "90%",
            height: "85%",
            overflow: "scroll",
            position: "relative",
            left: "5%",
            top: "10px",
            borderStyle: "groove"
        };

        const imageStyle = {
            display: "block",
            width: "98%",
            marginLeft: "auto",
            marginRight: "auto"
        };

        return (
            <div style={containerStyle}>
                {
                    this.props.images.map(imgLink => {
                        return <img key={_.last(imgLink.split("/"))} src={imgLink} style={imageStyle}/>;
                    })
                }
            </div>
        );
    }
});

export default ImageList;
