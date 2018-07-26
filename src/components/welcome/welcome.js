import React from 'react';

export default class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome-section">
                <div className="welcome-container">
                    <div className="left-section">
                        <h2 className="heading">
                            <span>Welcome</span> to MTC Masters
                        </h2>
                        <p className="description">
                            MTC Masters provide complete on-site fuel & tank cleaning services for
                            all gasolines including E10 to E85, Diesel, and Bio-Diesel
                        </p>
                        <p className="description">
                            We have branches in and around the Gauteng province. We provide mobile
                            services for boats, storage tanks, heavy equipment, standby generators,
                            tank farms, service stations and more.
                        </p>
                    </div>
                    <div className="right-section">
                        <img src="./assets/images/image5.png" alt="welcome" />
                    </div>
                </div>
            </div>
        );
    }
}
