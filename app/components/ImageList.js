import React from "react";

import ImageItem from "./ImageItem";

var ImageList = React.createClass({
    displayName: "ImageList",

    propTypes: {
        mode: React.PropTypes.string.isRequired,
        images: React.PropTypes.array.isRequired,
        currentIndex: React.PropTypes.number.isRequired,
        imageLoadRange: React.PropTypes.number.isRequired
    },

    render() {
        const children = this.props.images.map( (imgLink, index) => {
            if ( index < this.props.imageLoadRange) {
                if( this.props.mode === "click" && index !== this.props.currentIndex) {
                    return <ImageItem imageSrc={imgLink} display={false}/>;
                } else {
                    return <ImageItem imageSrc={imgLink} display={true}/>;
                }
            }
        });

        return (
            <div>
                {children}
            </div>
        );
    }
});

export default ImageList;
