import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ReactPlayer from 'react-player';
import closeMenu from "../images/close.svg";


const SliderProyects = ({ image1, video, image2, image3, image4 }) => {
    const arrowRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoWidth, setVideoWidth] = useState('250px');
    const [videoHeight, setVideoHeight] = useState('300px');
    const [isVideoExpanded, setIsVideoExpanded] = useState(false);
    const videoContainerRef = useRef(null);

    const handlePlay = () => {
        setIsPlaying(true);
        setIsVideoExpanded(true);
    };

    const handleClose = () => {
        setIsPlaying(false);
        setIsVideoExpanded(false);
    };

    const handleOutsideClick = (e) => {
        if (isVideoExpanded && !arrowRef.current.contains(e.target)) {
            handleClose();
        }
    };

    useEffect(() => {
        const handleMouseDown = (e) => {
            handleOutsideClick(e);
        };

        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, [isVideoExpanded]);

    useEffect(() => {
        const handleResize = () => {
            const containerWidth = videoContainerRef.current.offsetWidth;

            if (containerWidth < 750) {
                setVideoWidth('100%');
                setVideoHeight('auto');
            } else {
                setVideoWidth('237px');
                setVideoHeight('237px');
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const CustomPrevArrow = ({ onClick }) => (
        <button onClick={onClick} className="back">
            <IoIosArrowBack />
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button onClick={onClick} className="next">
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
        adaptiveHeight: true,
        centerMode: true,
        focusOnSelect: true, swipeToSlide: true,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="contenedorSlider" ref={videoContainerRef}>
            <Slider {...settings}>
                <div className="carousel-container">
                    <img src={image1} className="carousel-image" alt="Image 1" />
                </div>
                {video && (
                    <div className="carousel-container" >
                        <ReactPlayer
                            url={video}
                            className={`slick-slide slick-current carousel-video ${isVideoExpanded ? 'expanded' : ''}`}
                            controls
                            light
                            playing={isPlaying}
                            width={videoWidth}
                            height={videoHeight}
                            onPlay={handlePlay}
                            config={{
                                youtube: {
                                    playerVars: { origin: 'https://portfolio-claramartin.vercel.app/' },
                                },
                            }}
                        />
                        {isVideoExpanded && (

                            <img className="closeButton" src={closeMenu} onClick={handleClose} alt="Close" />

                        )}
                    </div>
                )}
                <div className="carousel-container">
                    <img src={image2} className="carousel-image" alt="Image 2" />
                </div>
                <div className="carousel-container">
                    <img src={image3} className="carousel-image" alt="Image 3" />
                </div>
            </Slider>
        </div>
    );
};

export default SliderProyects;
