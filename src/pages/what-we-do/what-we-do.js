import React from 'react';
import Header from '../../components/header/header';
import whatWeDoHeaderUrl from '../../assets/images/what-we-do/Header-min.png';
import PageHeadView from '../../components/page-head/page-head';
import SimpleSlider from '../../components/slider/slider';
import { Link } from 'react-router-dom';
import ChevronRight from 'react-feather/dist/icons/chevron-right';
import Description from '../../components/description/description';
import {
    settings,
    industryCodes,
    industryStandardsItems,
    services,
    firstParagraph,
    secondParagraph
} from './what-we-do-data';
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
                <Description firstParagraph={firstParagraph} secondParagraph={secondParagraph} />
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
                            {services.map(service => (
                                <div key={service.imgUrl} className="service">
                                    <img src={service.imgUrl} alt="service-item" />
                                    <div className="caption">
                                        <h3 className="title">{service.title}</h3>
                                        <p className="description">{service.description}</p>
                                        <div className="explore-more">
                                            <Link to={service.link}>
                                                <span>Explore More</span>
                                                <ChevronRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                            <img
                                src={require('../../assets/images/what-we-do/industry-standards.png')}
                            />
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
                                    {industryCodes.map((item, idx) => <li key={idx}>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
