import React from "react";
import _ from "underscore";

import issueAction from "../actions/issueAction";

var ImageList = React.createClass({
    displayName: "ImageList",

    propTypes: {
        images: React.PropTypes.array.isRequired,
        currentIndex: React.PropTypes.number.isRequired,
        imageLoadRange: React.PropTypes.number.isRequired
    },

    handleScroll() {
        const node = this.refs.viewer.getDOMNode();
        const imageHeight = Math.floor(node.scrollHeight / this.props.imageLoadRange);
        const newPage = Math.floor(node.scrollTop / imageHeight );

        if(this.props.currentIndex !== newPage) {
            issueAction.updateIndex(Math.floor(node.scrollTop / imageHeight));
        }
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

        const children = this.props.images.map( (imgLink, index) => {
            /* start to load next chunk*/
            if ( index < this.props.imageLoadRange) {
                const imageStyle = {
                    display: "block",
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto"
                };

                return (
                    <img
                        key={_.last(imgLink.split("/"))}
                        src={imgLink}
                        style={imageStyle}/>
                );
            }
        });

        return (
            <div style={containerStyle} ref="viewer" onScroll={this.handleScroll}>
                {children}
            </div>
        );
    }
});

export default ImageList;
