import React from 'react';
import Header from '../header/header';
import Carousel from '../carousel/carousel';
import Welcome from '../welcome/welcome';
export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Carousel />
                <Welcome />
            </div>
        );
    }
}
