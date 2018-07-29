import React from 'react';
import { Phone, Mail, MapPin } from 'react-feather';
import ReactSvg from 'react-svg';
import { Link } from 'react-router-dom';
export default class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className="pre-header-items-container">
                    <div className="logo-container">
                        <ReactSvg path={require('../../assets/icons/logo.svg')}>
                            <Link className="logo" to="/" />
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
                        <Link to="/" className={this.props.path === '/' ? 'active' : 'inactive'}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="who-we-are">Who We Are</Link>
                    </li>
                    <li>
                        <Link
                            to="what-we-do"
                            className={this.props.path === 'what-we-do' ? 'active' : 'inactive'}
                        >
                            What We Do
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="our-projects"
                            className={this.props.path === 'our-projects' ? 'active' : 'inactive'}
                        >
                            Our Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact-us">Contact Us</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
