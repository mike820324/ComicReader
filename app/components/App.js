import React from "react";

import imageStore from "../stores/imageStore";

// import compoenents
import HeaderBar from "./HeaderBar";
import ImageList from "./ImageList";

var ComicReader = React.createClass({
    displayName: "ComicReader",

    getInitialState() {
        return imageStore.getState();
    },

    componentDidMount() {
        imageStore.listen(this.onChange);
    },

    componentWillUnmount() {
        imageStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },

    render() {
        return (
            <div>
                <HeaderBar />
                <ImageList images={this.state.images}/>
                <h1> This is Footer </h1>
            </div>
        );
    }
});

export default ComicReader;

