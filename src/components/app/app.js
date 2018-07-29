import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/home/home';
import WhatWeDo from '../../pages/what-we-do/what-we-do';
import Footer from '../footer/footer';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Switch>
                        <Route exact path="/" render={props => <Home {...props} path="/" />} />
                        <Route
                            path="/what-we-do"
                            render={props => <WhatWeDo {...props} path="what-we-do" />}
                        />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
