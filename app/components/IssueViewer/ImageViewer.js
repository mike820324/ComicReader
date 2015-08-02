import React from "react";

import issueAction from "../../actions/issueAction";
import ImageList from "./ImageList";

var ImageViewer = React.createClass({
    displayName: "ImageViewer",

    propTypes: {
        mode: React.PropTypes.string.isRequired,
        images: React.PropTypes.array.isRequired,
        currentIndex: React.PropTypes.number.isRequired,
        currentIssue: React.PropTypes.string.isRequired,
        imageLoadRange: React.PropTypes.number.isRequired
    },

    componentDidUpdate() {
        if(this.props.mode === "click") {
            this.refs.viewer.getDOMNode().scrollTop = 0;
        }
    },

    handleKeyDown(e) {
        if( e.which === 37 ) {
            issueAction.prevPage();
        } else if( e.which === 39 ) {
            issueAction.nextPage();
        }
    },

    handleScroll() {
        const node = this.refs.viewer.getDOMNode();
        issueAction.updateScrollHeight(node.scrollTop);
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

        return (
            <div style={containerStyle} ref="viewer"
                onScroll={this.props.mode === "scroll" ? this.handleScroll : null}
                onKeyDown={this.props.mode === "click" ? this.handleKeyDown : null}
                tabIndex={this.props.mode === "click" ? "0" : null}>
                <ImageList
                    mode={this.props.mode}
                    images={this.props.images}
                    currentIndex={this.props.currentIndex}
                    imageLoadRange={this.props.imageLoadRange}
                />
            </div>
        );
    }
});

export default ImageViewer;
