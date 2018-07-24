import React from "react";
import Slider from "react-slick";

export default class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
      return (
      <Slider {...settings}>
        <div>
          <img className="carousel" src='./assets/images/slide1.jpg' alt="image1"/>
          <h2>Ultrasonic Tank Testing</h2>
          <h4>The aim is to be able to indentify any leak rapidly so as to limit all risk of pollution as much as possible</h4>
        </div>
        <div>
        <img className="carousel" src='./assets/images/slide1.jpg' alt="image1"/>
        </div>
        <div>
        <img className="carousel" src='./assets/images/slide1.jpg' alt="image1"/>
        </div>
        <div>
        <img className="carousel" src='./assets/images/slide1.jpg' alt="image1"/>
        </div>
        <div>
        <img className="carousel" src='./assets/images/slide1.jpg' alt="image1"/>
        </div>
        <div>
        <img className="carousel" src='./assets/images/slide1.jpg' alt="image1"/>
        </div>
      </Slider>
    );
  }
}