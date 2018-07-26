import React from 'react';
import Header from '../header/header';
import Carousel from '../carousel/carousel';
import Welcome from '../welcome/welcome';
import WhatWeDo from '../what-we-do/what-we-do';
import OurApproach from '../our-approach/our-approach';
export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Carousel />
                <Welcome />
                <WhatWeDo />
                <OurApproach />
            </div>
        );
    }
}
