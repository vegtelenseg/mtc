import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer-section">
                <div className="footer-container">
                    <div className="logo">Logo</div>
                    <div>Home</div>
                    <div>
                        Who We Are
                        <ul>
                            <li>
                                <a>About MTC Masters</a>
                            </li>
                            <li>
                                <a>Our Team</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        What We Do
                        <ul>
                            <li>
                                <a>Ultrasonic Tank Testing</a>
                            </li>
                            <li>
                                <a>Tank Cleaning</a>
                            </li>

                            <li>
                                <a>Pump and Tanks Installation</a>
                            </li>
                            <li>
                                <a>Maintanance Services</a>
                            </li>

                            <li>
                                <a>Health & Safety</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        Our Work
                        <ul>
                            <li>
                                <a>Our Portfolio</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        Contact Us
                        <ul>
                            <li>
                                <a>Enquiry Form</a>
                            </li>
                        </ul>
                    </div>
                    <div>Get In Touch With Us</div>
                </div>
                <div className="copyright">
                    <p>MTC Masters © 2018</p>
                </div>
            </div>
        );
    }
}
