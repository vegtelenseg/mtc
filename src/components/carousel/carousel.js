import React from 'react';
import Slider from 'react-slick';
import slidesInfo from './slides-info';
export default class Carousel extends React.Component {
    render() {
        var settings = {
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true
        };
        return <Slider {...settings}>{this.renderCarouselItems(slidesInfo)}</Slider>;
    }
    renderCarouselItems(slidesInfo) {
        return slidesInfo.map((slideInfo, idx) => (
            <div className="carousel-item" key={idx}>
                <img className="carousel-image" src={slideInfo.imageUri} alt="image1" />
                <div className="info-container">
                    <h2 className="heading">{slideInfo.heading}</h2>
                    <h4 className="description">{slideInfo.description}</h4>
                    <button className="carousel-button">{slideInfo.btnText}</button>
                </div>
            </div>
        ));
    }
}
