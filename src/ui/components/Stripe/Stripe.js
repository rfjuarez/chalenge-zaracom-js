import React from 'react';
import Slider from "react-slick";
import PropTypes from "prop-types";
import './Stripe.css'

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
};

const Stripe = ({posters}) => {
    //debugger
    return (
        <div className='stripe__wrapper'>
            <Slider {...settings}>
                {posters}
            </Slider>
        </div>
    )
};
Stripe.propTypes = {
    posters: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        img: PropTypes.string,
        id: PropTypes.string,
    }))
}

Stripe.defaultProps = {
    posters: [],
}

export default Stripe;