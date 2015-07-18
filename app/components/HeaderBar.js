/* jshint esnext: true */
import React from 'react';

var HeaderBar = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func.isRequired
    },

    onClickHandler() {
        let node = this.refs.input_url.getDOMNode();
        let url = node.value;
        node.value = "";
        this.props.onClick(url);
    },

    render() {
        return(
            <div>
                <h1> Comic Reader </h1>
                <input ref="input_url" type="text"/>
                <button onClick={this.onClickHandler}> Fetch </button>
            </div>
        );
    }
});

export default HeaderBar;
