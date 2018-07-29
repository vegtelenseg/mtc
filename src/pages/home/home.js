import React from 'react';
import Header from '../../components/header/header';
import Carousel from '../../components/carousel/carousel';
import Welcome from '../../components/welcome/welcome';
import WhatWeDo from '../../components/what-we-do/what-we-do';
import OurApproach from '../../components/our-approach/our-approach';
import OurClientele from '../../components/our-clientele/our-clientele';
import Footer from '../../components/footer/footer';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header path={this.props.match.path} />
                <Carousel />
                <Welcome />
                <WhatWeDo />
                <OurApproach />
                <OurClientele />
            </div>
        );
    }
}
