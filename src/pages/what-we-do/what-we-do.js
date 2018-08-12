import React from 'react';
import Header from '../../components/header/header';
import whatWeDoHeaderUrl from '../../assets/images/what-we-do/Header-min.png';
import PageHeadView from '../../components/page-head/page-head';
export default class WhatWeDoView extends React.PureComponent {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <Header path={this.props.match.path} />
                <PageHeadView
                    imgUrl={whatWeDoHeaderUrl}
                    imageStyle="head-image-style"
                    pageTitle="What We Do"
                    pageTitleStyle="page-title-style"
                />
            </div>
        );
    }
}
