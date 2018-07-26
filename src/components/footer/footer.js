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
                    <div className="contact-us">
                        Get In Touch With Us
                        <ul>
                            <li className="address">
                                <a>22 San Vincezo</a>
                                <a>5th Road Carlswald</a>
                                <a>Midrand, 1681</a>
                            </li>
                            <li>
                                <a href="tel:+27110748872">+27 11 074 8872</a>
                                <a href="tel:+27763152855">+27 76 315 2855</a>
                                <a href="tel:+27829983813">+27 82 998 3813</a>
                            </li>
                            <li>
                                <a href="mailto:info@mtcmasters.co.za">info@mtcmasters.co.za</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>MTC Masters © 2018</p>
                </div>
            </div>
        );
    }
}
