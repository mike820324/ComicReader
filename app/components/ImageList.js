import React from 'react';

var ImageList = React.createClass({
    propTypes: {
        images: React.PropTypes.array.isRequired
    },

    render() {
        return(
            <div>
                {
                    this.props.images.map((imgLink) => {
                        return <img src={imgLink} />
                    })
                }
            </div>
        );
    }
});

export default ImageList;
