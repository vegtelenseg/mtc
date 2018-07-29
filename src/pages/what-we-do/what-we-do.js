import React from 'react';
import Header from '../../components/header/header';

export default class WhatWeDoView extends React.PureComponent {
    render() {
        return (
            <div>
                <Header path={this.props.path} />
            </div>
        );
    }
}
