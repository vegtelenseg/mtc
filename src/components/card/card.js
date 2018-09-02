import React from 'react';
import ReactSVG from 'react-svg';

export default class Card extends React.PureComponent {
    render() {
        return (
            <div className="card-container">
                <div className="icon">
                    <ReactSVG path={this.props.icon} svgStyle={{ width: 150, height: 150 }} />
                </div>
                <div className="title">
                    <p>{this.props.title}</p>
                </div>
                <div className="description">
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}
