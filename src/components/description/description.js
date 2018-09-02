import React from 'react';

export default class Description extends React.PureComponent {
    render() {
        return (
            <div className="description">
                <p>{this.props.firstParagraph}</p>
                <p>{this.props.secondParagraph}</p>
            </div>
        );
    }
}
