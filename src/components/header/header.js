import React from 'react';
import { Phone, Mail, MapPin } from 'react-feather';
import ReactSvg from 'react-svg';
export default class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className="pre-header-items-container">
                    <div className="logo-container">
                        <ReactSvg path={require('../../assets/icons/logo.svg')}>
                            <a className="logo" href="/home" />
                        </ReactSvg>
                    </div>
                    <div className="pre-header-items">
                        <div className="telephone">
                            <Phone className="phone-icon" />
                            <span>+27 11 072 8872</span>
                        </div>
                        <div className="email">
                            <Mail />
                            <span>info@mtcmasters.co.za</span>
                        </div>
                        <div className="location">
                            <MapPin />
                            <span>82 Allandale Office Complex, Midrand</span>
                        </div>
                    </div>
                </div>
                <ul className="header-items">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Who We Are</a>
                    </li>
                    <li>
                        <a>What We Do</a>
                    </li>
                    <li>
                        <a>Our Projects</a>
                    </li>
                    <li>
                        <a>Contact Us</a>
                    </li>
                </ul>
            </div>
        );
    }
}
