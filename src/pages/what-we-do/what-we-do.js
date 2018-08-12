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
                <div className="description">
                    <p>
                        We are a South African based company with decades of fuel experience. We
                        provide complete on-site mobile fuel & tank cleaning services for all
                        GASOLINES including E10 to E85, DIESEL and BIO-DIESEL. We have branches in
                        and around Gauteng Province.
                    </p>
                    <p>
                        We provide mobile service for boats, storage tanks, heavy equipment, standby
                        generators, tank farms, service stations and more! MTC Masters can
                        successfully clean your most difficult tanks. Serving numerous industries,
                        municipalities and utility companies, we are equipped to handle a broad
                        spectrum of cleaning from 10-gallon acid neutralization tanks for medical
                        and biotechnology companies to six million gallon 240-foot diameter refinery
                        tanks.
                    </p>
                </div>
            </div>
        );
    }
}
