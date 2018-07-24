import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
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
