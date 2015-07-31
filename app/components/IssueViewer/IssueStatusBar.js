import React from "react";


var IssueStatusBar = React.createClass({
    displayName: "IssueStatusBar",
    propTypes: {
        currentIssue: React.PropTypes.string.isRequired,
        currentPage: React.PropTypes.number.isRequired,
        totalPage: React.PropTypes.number.isRequired
    },

    render() {
        const containerStyle = {
            width: "100%",
            left: "5%"
        };

        const titleStyle = {
            textAlign: "center",
            margin: "0px",
            color: "white"
        };

        const pagerStyle = {
            textAlign: "right",
            margin: "0 5% 0 0",
            color: "white"
        };

        return (
            <div style={containerStyle}>
                <h1 style={titleStyle}> {this.props.currentIssue} </h1>
                <p style={pagerStyle}> {this.props.currentPage} / {this.props.totalPage} </p>
            </div>
        );
    }
});

export default IssueStatusBar;
