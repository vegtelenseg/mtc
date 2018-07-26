import React from 'react';
import Slider from 'react-slick';

export default class Carousel extends React.Component {
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        };
        return (
            <Slider {...settings}>
                <div className="carousel-item">
                    <img className="carousel-image" src="./assets/images/image3.png" alt="image1" />
                    <div className="info-container">
                        <h2 className="heading">Ultrasonic Tank Testing</h2>
                        <h4 className="description">
                            The aim is to be able to indentify any leak rapidly so as to limit all
                            risk of pollution as much as possible
                        </h4>
                        <button className="carousel-button">explore our expertise</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carousel-image" src="./assets/images/image2.png" alt="image1" />
                    <div className="info-container">
                        <h2 className="heading">Ultrasonic Tank Testing</h2>
                        <h4 className="description">
                            The aim is to be able to indentify any leak rapidly so as to limit all
                            risk of pollution as much as possible
                        </h4>
                        <button className="carousel-button">explore our expertise</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carousel-image" src="./assets/images/image1.png" alt="image1" />
                    <div className="info-container">
                        <h2 className="heading">Ultrasonic Tank Testing</h2>
                        <h4 className="description">
                            The aim is to be able to indentify any leak rapidly so as to limit all
                            risk of pollution as much as possible
                        </h4>
                        <button className="carousel-button">explore our expertise</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carousel-image" src="./assets/images/image4.png" alt="image1" />
                    <div className="info-container">
                        <h2 className="heading">Ultrasonic Tank Testing</h2>
                        <h4 className="description">
                            The aim is to be able to indentify any leak rapidly so as to limit all
                            risk of pollution as much as possible
                        </h4>
                        <button className="carousel-button">explore our expertise</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carousel-image" src="./assets/images/image5.png" alt="image1" />
                    <div className="info-container">
                        <h2 className="heading">Ultrasonic Tank Testing</h2>
                        <h4 className="description">
                            The aim is to be able to indentify any leak rapidly so as to limit all
                            risk of pollution as much as possible
                        </h4>
                        <button className="carousel-button">explore our expertise</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carousel-image" src="./assets/images/image6.png" alt="image1" />
                    <div className="info-container">
                        <h2 className="heading">Ultrasonic Tank Testing</h2>
                        <h4 className="description">
                            The aim is to be able to indentify any leak rapidly so as to limit all
                            risk of pollution as much as possible
                        </h4>
                        <button className="carousel-button">explore our expertise</button>
                    </div>
                </div>
            </Slider>
        );
    }
}
