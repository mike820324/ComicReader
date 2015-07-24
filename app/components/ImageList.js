import React from "react";
import _ from "underscore";

var ImageList = React.createClass({
    displayName: "ImageList",

    propTypes: {
        images: React.PropTypes.array.isRequired
    },

    render() {
        return (
            <div>
                {
                    this.props.images.map(imgLink => {
                        return <img key={_.last(imgLink.split("/"))} src={imgLink} />;
                    })
                }
            </div>
        );
    }
});

export default ImageList;
