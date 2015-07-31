import React from "react";

// import compoenents
import ImageViewer from "./ImageViewer";
import PageNavigator from "./PageNavigator";
import IssueStatusBar from "./IssueStatusBar";
import IssueMenuBar from "./IssueMenuBar";


var IssueViewer = React.createClass({
    displayName: "IssueViewer",
    propTypes: {
        viewerMode: React.PropTypes.string.isRequired,
        issueInfo: React.PropTypes.object.isRequired,
        currentIndex: React.PropTypes.number.isRequired,
        imageLoadRange: React.PropTypes.number.isRequired
    },

    render() {
        return (
            <div>
                <IssueStatusBar
                    currentIssue={this.props.issueInfo.issueNum}
                    currentPage={this.props.currentIndex + 1}
                    totalPage={this.props.issueInfo.images.length}
                />
                <ImageViewer
                    mode={this.props.viewerMode}
                    images={this.props.issueInfo.images}
                    currentIndex={this.props.currentIndex}
                    imageLoadRange={this.props.imageLoadRange}
                />
                <IssueMenuBar
                    viewerMode={this.props.viewerMode}
                />
                {
                    this.props.viewerMode !== "click" ?
                        null :
                        <PageNavigator />
                }
            </div>
        );
    }
});

export default IssueViewer;

