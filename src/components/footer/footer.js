import React from 'react';
import ReactSvg from 'react-svg';
import footerItems from './footer-items';
import { Link } from 'react-router-dom';
export default class Footer extends React.Component {
    render() {
        const titles = ['Who We Are', 'What We Do', 'Our Work', 'Contact Us'];
        return (
            <div className="footer-section">
                <div className="footer-container">
                    <div className="logo-container">
                        <ReactSvg path={require('../../assets/icons/logo.svg')}>
                            <a className="logo" href="/home" />
                        </ReactSvg>
                    </div>
                    <div>Home</div>
                    {this.renderFooterItems(titles)}
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
    renderFooterItems(titles) {
        return titles.map((title, idx) => (
            <div key={idx}>
                {title}
                {footerItems[idx].map((footerItem, idx) => (
                    <ul>
                        <li>
                            <Link to={footerItem.toLowerCase().replace(/\s/g, '-')}>
                                {footerItem}
                            </Link>
                        </li>
                    </ul>
                ))}
            </div>
        ));
    }
}
