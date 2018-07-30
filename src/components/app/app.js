import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/home/home';
import Footer from '../footer/footer';
import WhoWeAreView from '../../pages/who-we-are/who-we-are';
import WhatWeDoView from '../../pages/what-we-do/what-we-do';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Switch>
                        <Route exact path="/" render={props => <Home {...props} />} />
                        <Route
                            exact
                            path="/what-we-do"
                            render={props => <WhatWeDoView {...props} />}
                        />
                        <Route
                            exact
                            path="/who-we-are"
                            render={props => <WhoWeAreView {...props} />}
                        />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
