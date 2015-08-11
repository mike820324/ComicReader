import React from "react";

import viewerAction from "../actions/viewerAction";


var Viewer = React.createClass({
    displayName: "Viewer",

    handleClose() {
        viewerAction.closeViewer();
    },

    render() {
        const closeButtonStyle = {
            position: "absolute",
            top: "0px",
            right: "0px",
            background: "black",
            color: "white",
            borderStyle: "none",
            fontSize: "larger"
        };

        const viewerStyle = {
            background: "black",
            color: "white",
            position: "relative",
            height: "100%",
            width: "100%"
        };

        return (
            <div style={viewerStyle}>
                <button onClick={this.handleClose} style={closeButtonStyle}> X </button>
                {this.props.children}
            </div>
        );
    }
});

export default Viewer;
