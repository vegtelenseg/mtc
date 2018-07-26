import React from 'react';
import { ChevronRight } from 'react-feather';
export default class WhatWeDo extends React.Component {
    render() {
        const serviceTypes = [
            {
                serviceName: 'ultrasonic / vacusonic testing',
                imageUrl: ''
            },
            {
                serviceName: 'tank cleaning',
                imageUrl: ''
            },
            {
                serviceName: 'pump and tank installation',
                imageUrl: ''
            },
            {
                serviceName: 'maintanance services',
                imageUrl: ''
            },
            {
                serviceName: 'health & safety',
                imageUrl: ''
            },
            {
                serviceName: 'ultrasonic/vacusonic',
                imageUrl: ''
            }
        ];
        return (
            <div className="what-we-do-section">
                <div className="what-we-do-container">
                    <h2 className="heading">What We Do</h2>
                    <p className="description">
                        We are a dedicated, committed and competent fuel quality specialists with
                        SABS approved state of the art equipment, which filters all foreign objects
                        or contaminants from the tanks, with little effect affecting the volume of
                        the product in the tank.
                    </p>
                    <div className="service-categories">
                        {this.renderServiceTypes(serviceTypes)}
                    </div>
                </div>
            </div>
        );
    }
    renderServiceTypes(serviceTypes) {
        return serviceTypes.map((serviceType, idx) => (
            <div className="service-type" key={idx}>
                <div>
                    <img src={serviceType.imageUrl} alt="service-type" />
                    <a className="service-explorer">
                        <span>
                            Explore More<span className="chevron-circle">
                                <ChevronRight />
                            </span>
                        </span>
                    </a>
                </div>
                <h4 className="service-name">{serviceType.serviceName}</h4>
            </div>
        ));
    }
}
