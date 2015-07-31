import React from "react";
import issueAction from "../../actions/issueAction";

var PageNavigator = React.createClass({
    displayName: "PageNavigator",

    propTypes: {
        currentIndex: React.PropTypes.number.isRequired
    },

    onPageNext() {
        issueAction.nextPage();
    },

    onPagePrev() {
        issueAction.prevPage();
    },

    render() {
        const prevButtonStyle = {
            position: "fixed",
            top: "35%",
            left: "0px",
            height: "25%",
            maxHeight: "200px",
            width: "5%",
            maxWidth: "30px",
            opacity: "0.5",
            fontSize: "x-large",
            fontWeight: "bold",
            borderStyle: "none",
            background: "grey"
        };

        const nextButtonStyle = {
            position: "fixed",
            top: "35%",
            right: "0px",
            height: "25%",
            maxHeight: "200px",
            width: "5%",
            maxWidth: "30px",
            opacity: "0.5",
            fontSize: "x-large",
            fontWeight: "bold",
            borderStyle: "none",
            background: "grey"
        };

        return (
            <div>
                <button onClick={this.onPagePrev} style={prevButtonStyle}>{"<"}</button>
                <button onClick={this.onPageNext} style={nextButtonStyle}>{">"}</button>
            </div>
        );
    }
});

export default PageNavigator;
