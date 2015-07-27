import React from "react";
import _ from "underscore";

import PageNavigator from "./PageNavigator";
import issueAction from "../actions/issueAction";

var ShiftImageList = React.createClass({
    displayName: "ShiftImageList",

    propTypes: {
        currentIndex: React.PropTypes.number.isRequired,
        images: React.PropTypes.array.isRequired,
        imageLoadRange: React.PropTypes.number.isRequired
    },

    componentDidUpdate() {
        this.refs.viewer.getDOMNode().scrollTop = 0;
    },

    handleKeyDown(e) {
        if( e.which === 37 ) {
            issueAction.prevPage();
        } else if( e.which === 39 ) {
            issueAction.nextPage();
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
                    display: this.props.currentIndex === index ? "block" : "none",
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
            <div style={containerStyle} ref="viewer" tabIndex="0" onKeyDown={this.handleKeyDown}>
                {children}
                <PageNavigator />
            </div>
        );
    }
});

export default ShiftImageList;
