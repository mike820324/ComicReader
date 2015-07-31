import React from "react";

import issueAction from "../../actions/issueAction";

var IssueList = React.createClass({
    displayName: "IssueList",

    propTypes: {
        issues: React.PropTypes.array.isRequired
    },

    transitionTo(url) {
        issueAction.fetchImage(url);
    },

    render() {
        const anchorStyle = {
            textAlign: "center",
            display: "block",
            color: "white"
        };
        return (
            <div>
                {
                    this.props.issues.map( issue => {
                        return <a onClick={this.transitionTo.bind(this, issue.href)} style={anchorStyle}>{issue.title}</a>;
                    })
                }
            </div>
        );
    }
});

export default IssueList;
