import React from "react";

import comicvipParser from "./lib/parser/comicvip";

// import compoenents
import HeaderBar from "./components/HeaderBar";
import ImageList from "./components/ImageList";

var ComicReader = React.createClass({
    getInitialState() {
        return {
            url: "",
            imageLink: []
        };
    },

    getUrl(url) {
        this.setState({url: url});
    },

    componentDidUpdate() {
        if(this.state.url !== "") {
            comicvipParser.getImageLinks(this.state.url)
            .then(images => {
                this.setState({imageLink: images});
            });
        }
    },

    render() {
        return (
            <div>
                <HeaderBar onClick={this.getUrl}/>
                <ImageList images={this.state.imageLink} />
                <h1> This is Footer </h1>
            </div>
        );
    }
});

React.render(
    <ComicReader />,
    document.getElementById("app")
);

