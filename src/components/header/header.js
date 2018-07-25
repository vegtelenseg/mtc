import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className="pre-header-items-container">
                    <div className="pre-header-items">
                        <div className="telephone">
                            <span>+27 11 072 8872</span>
                        </div>
                        <div className="email">
                            <span>info@mtcmasters.co.za</span>
                        </div>
                        <div className="location">
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
