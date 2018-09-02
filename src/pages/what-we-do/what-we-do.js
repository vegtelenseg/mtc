import React from 'react';
import Header from '../../components/header/header';
import whatWeDoHeaderUrl from '../../assets/images/what-we-do/Header-min.png';
import PageHeadView from '../../components/page-head/page-head';
import SimpleSlider from '../../components/slider/slider';
import { Link } from 'react-router-dom';
import ChevronRight from 'react-feather/dist/icons/chevron-right';

const industryStandardsItems = [
    'Job Hazard Analysis (JHA)',
    'Safety Work Practice',
    'Work Method Planning',
    'Working in Height',
    'Fire Fighting',
    'Record Keeping',
    'First Aid',
    'Stop Work Authority'
];

const industryCodes = ['Councils By-Laws', 'SABS Codes and Standards, SANS14001, SANS10131, SANS9001, SANS10089-1, SANS10089-2, SANS10089-3', 'Occupational Health & Safety', 'Safe Work Practice Act', 'Company laws', 'Environmental Management Act', 'Hazardous Substance Act', 'Mining Act', 'National Contraction Act', 'National Building Regulations Act'];
export default class WhatWeDoView extends React.PureComponent {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
        };
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
                            <h2 className="heading">Our Services</h2>
                            <p className="description">
                                We are a dedicated, committed and competent fuel quality specialists
                                with SABS approved state of the art equipment, which filters all
                                foreign objects or contaminants from the tanks, with little effect
                                affecting the volume of the product in the tank.
                            </p>
                        </div>
                        <SimpleSlider settings={settings} mustFlex>
                                <div className="service">
                                    <img
                                        src={require('../../assets/images/what-we-do/pump-installation.jpg')}
                                        alt="service-item"
                                    />
                                    <div className="caption">
                                        <h3 className="title">Ultrasonic Tank Testing</h3>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <div className="explore-more">
                                            <Link to="/what-we-do/ultrasonic-tank-testing">
                                                <span>Explore More</span>
                                                <ChevronRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div  className="service">
                                    <img
                                        src={require('../../assets/images/what-we-do/tank-installation.jpg')}
                                        alt="service-item"
                                    />
                                    <div className="caption">
                                        <h3 className="title">New Pump & Tank Installation</h3>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <div className="explore-more">
                                            <Link to="/what-we-do/ultrasonic-tank-testing">
                                                <span>Explore More</span>
                                                <ChevronRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div  className="service">
                                    <img
                                        src={require('../../assets/images/what-we-do/pump-installation.jpg')}
                                        alt="service-item"
                                    />
                                    <div className="caption">
                                        <h3 className="title">
                                            Waste Water Treatment Neutralization And Disposal
                                        </h3>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <div className="explore-more">
                                            <Link to="/what-we-do/ultrasonic-tank-testing">
                                                <span>Explore More</span>
                                                <ChevronRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div  className="service">
                                    <img
                                        src={require('../../assets/images/what-we-do/pressure-counter.png')}
                                        alt="service-item"
                                    />
                                    <div className="caption">
                                        <h3 className="title">Fuel Quality Testing</h3>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <div className="explore-more">
                                            <Link to="/what-we-do/ultrasonic-tank-testing">
                                                <span>Explore More</span>
                                                <ChevronRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="service">
                                    <img
                                        src={require('../../assets/images/what-we-do/tank-installation.jpg')}
                                        alt="service-item"
                                    />
                                    <div className="caption">
                                        <h3 className="title">Ultrasonic Tank Testing</h3>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <div className="explore-more">
                                            <Link to="/what-we-do/ultrasonic-tank-testing">
                                                <span>Explore More</span>
                                                <ChevronRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="service">
                                    <img
                                        src={require('../../assets/images/what-we-do/pump-installation.jpg')}
                                        alt="service-item"
                                    />
                                    <div className="caption">
                                        <h3 className="title">Ultrasonic Tank Testing</h3>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <div className="explore-more">
                                            <Link to="/what-we-do/ultrasonic-tank-testing">
                                                <span>Explore More</span>
                                                <ChevronRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                        </SimpleSlider>
                    </div>
                </div>
                <div className="industry-standards-container">
                    <div className="industry-standards">
                        <h3 className="heading">Industry Standards</h3>
                        <p className="description">
                            We are a dedicated, committed and competent fuel quality specialists
                            with SABS approved state of the art equipment, which filters all foreign
                            objects or contaminants from the tanks, with little effect affecting the
                            volume of the product in the tank.
                        </p>
                    </div>
                    <div className="is-section-two">
                        <div className="image">
                            <img src={require('../../assets/images/what-we-do/industry-standards.png')} />
                        </div>
                        <div className="listings">
                            <ul>
                                {industryStandardsItems.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <div className="other-listings">
                            <h3>Other Industry Codes That We Subscribe To</h3>
                            <ul>
                                {industryCodes.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
