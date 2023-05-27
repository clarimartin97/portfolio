import React, { useRef } from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SliderProyects = ({ image1, image2, image3, image4 }) => {
    const arrowRef = useRef(null);

    const CustomPrevArrow = ({ onClick }) => (
        <button onClick={onClick} className='back'>
            <IoIosArrowBack />
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button onClick={onClick} className='next'>
            <IoIosArrowForward />
        </button>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }
        ],
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    return (
        <div className='contenedorSlider'>
            <Slider ref={arrowRef} {...settings}>
                <div className='carousel-container '>
                    <img src={image1} className='carousel-image' alt='Image 1' />
                </div>
                <div className='carousel-container'>
                    <img src={image2} className='carousel-image' alt='Image 2' />
                </div>
                <div className='carousel-container'>
                    <img src={image3} className='carousel-image' alt='Image 3' />
                </div>
                <div className='carousel-container'>
                    <img src={image4} className='carousel-image' alt='Image 4' />
                </div>
            </Slider>
        </div>
    );
};

export default SliderProyects;
