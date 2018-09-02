import React from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends React.Component {
    render() {
        return <Slider {...this.props.settings} className={this.props.mustFlex && "service-container"}>{this.props.children}</Slider>;
    }
}
