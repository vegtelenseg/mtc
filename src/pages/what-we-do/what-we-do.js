import React from 'react';
import Header from '../../components/header/header';
import whatWeDoHeaderUrl from '../../assets/images/what-we-do/Header-min.png';
import PageHeadView from '../../components/page-head/page-head';
import SimpleSlider from '../../components/slider/slider';
export default class WhatWeDoView extends React.PureComponent {
    render() {
        return (
            <div>
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
                <div className="what-we-do-container">
                    <div className="our-services">
                        <div>
                            <h2 className="heading">Our Serives</h2>
                            <p className="description">
                                We are a dedicated, committed and competent fuel quality specialists
                                with SABS approved state of the art equipment, which filters all
                                foreign objects or contaminants from the tanks, with little effect
                                affecting the volume of the product in the tank.
                            </p>
                        </div>
                        <SimpleSlider>
                            <div className="service">
                                <img
                                    src={require('../../assets/images/what-we-do/refill-stall.jpg')}
                                    alt="service-item"
                                />
                                <h3 className="service-title">title</h3>
                                <p className="service-description">Description</p>
                                <button className="service-button">
                                    More<span>Icon</span>
                                </button>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </SimpleSlider>
                    </div>
                </div>
            </div>
        );
    }
}
