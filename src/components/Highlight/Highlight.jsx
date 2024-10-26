import React from 'react'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 *
 * @returns
 */

function Highlight() {

    const banners = [
        {
            id: '7654567534',
            name: 'null',
            order: 1,
            url: '/Home/Highlight/H1.png',
            link: null,
            title: 'Find your peace',
            description: 'Insight to norish your spiritual path',
            buttonText: '$1/min'
        },
    ];

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        infinite: false,
        dots: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="banner__head">
            <div className='banner__wrapper'>
                <Slider {...sliderSettings}>
                    {banners
                        ? banners.map((banner, index) => (
                            <div className='banner' key={index}>
                                <div className='banner__content'>
                                    <div className='banner__text'>
                                        <div className="banner__text__container">
                                        <h1 className='banner__title'>{banner.title}</h1>
                                        <p className='banner__description'>{banner.description}
                                        </p>
                                            <button className='banner__button'>{banner.buttonText}</button>
                                        </div>
                                    </div>
                                    <img className='banner__image' src={banner.url} alt={banner.name} />
                                </div>
                            </div>
                        ))
                        : null}
                </Slider>
            </div>
        </div>
    );
};

export default Highlight;
