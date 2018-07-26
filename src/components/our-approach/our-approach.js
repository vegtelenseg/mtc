import React from 'react';

export default class OurApproach extends React.Component {
    render() {
        return (
            <div className="welcome-section our-approach-section">
                <div className="welcome-container">
                    <div className="left-section">
                        <h2 className="heading">
                            <span>Our</span> Approach
                        </h2>
                        <p className="description">
                            We are a dedicated, committed and competent fuel quality specialists
                            with SABS approved state of the art equipment, which filters all foreign
                            objects or contaminants from the tanks, with little effect affecting the
                            volume of the product in the tank.
                        </p>
                        <p className="description">
                            Our mission is to ensure that when we leave the client premises we only
                            take the contaminants out of the tank and leave clean fuel, intact and
                            in almost the same volumes as we found it.
                        </p>
                    </div>
                    <div className="right-section">
                        <img src="./assets/images/image4.png" alt="welcome" />
                    </div>
                </div>
            </div>
        );
    }
}
