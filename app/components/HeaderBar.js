import React from 'react';

var HeaderBar = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func.isRequired
    },

    onClickHandler() {
        let node = React.findDOMNode(this.refs.input_url);
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
