import React from 'react';

export default class OurClientele extends React.Component {
    render() {
        return (
            <div className="welcome-section our-approach-section">
                <div className="welcome-container our-clientele-container ">
                    <div className="left-section">
                        <h2 className="clientele-heading heading">
                            <span className="approach-border">Our</span> Clientele
                        </h2>
                        <p className="description our-clientele-description">
                            We are a dedicated, committed and competent fuel quality specialists
                            with SABS approved state of the art equipment.
                        </p>
                        <p className="description our-clientele-description sub-text">
                            Our mission is to ensure that when we leave the client premises we only
                            take the contaminants out of the tank and leave clean fuel, intact and
                            in almost the same volumes as we found it.
                        </p>
                    </div>
                    <div className="right-section">
                        <img src="./assets/images/image1.png" alt="welcome" />
                    </div>
                </div>
            </div>
        );
    }
}
