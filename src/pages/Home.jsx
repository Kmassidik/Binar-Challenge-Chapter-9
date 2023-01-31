import { useState, Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { dataFeaturedGames } from './gamesData/featureData';
import { dataNewGames } from './gamesData/newData';
import imgGirl from '../assets/images/ArenaOfValor.jpg';


// import Slider from "react-slick";
// import Lightbox from "react-image-lightbox";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "react-image-lightbox/style.css";

// const photos = [
//     "https://i.ibb.co/xSK5c9J/Arena-Of-Valor.jpg",
//     "https://source.unsplash.com/Dm-qxdynoEc/800x799",

//     "https://source.unsplash.com/qDkso9nvCg0/600x799",
//     "https://source.unsplash.com/qDkso9nvCg0/600x799",
//     "https://source.unsplash.com/qDkso9nvCg0/600x799"
// ];

// const captions = [
//     'Cat in the snow',
//     '',
//     '',
//     '',
//   ];

const Home = () => {
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleErrorImage = (data) => {
        setDefaultImage((prev) => ({
            ...prev,
            [data.target.alt]: data.target.alt,
            // linkDefault: imgGirl,
        }));
    };

    const handlePlayNow = () => {
        if(localStorage.getItem('accesstoken') === null) {
            alert ("Please Login or Sign Up")
            window.location.href = '/'
        } else window.location.href = "/gameSuit"
    }

    return (
        <>
            <div className="slider-game">
                <button type="button" className="btn btn-light ml-2 my-3 type-game">Game List</button>
                <Slider {...settings}>
                    {dataFeaturedGames.map((item) => (
                        <div className="card-slider">
                            <div className="card-top">
                                <img
                                    src={
                                        defaultImage[item.title] === item.title
                                            ? defaultImage.linkDefault
                                            : item.linkImg
                                    }
                                    alt={item.title}
                                    onError={handleErrorImage}
                                />
                                <h1 className="title-game">{item.title}</h1>
                            </div>
                            <div className="card-bottom">
                                <span className="category">{item.category}</span>
                            </div>
                            <button type="button" className="btn btn-outline-success btn-slider text-center" onClick={handlePlayNow}>Play Now!</button>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="slider-game">
                <button type="button" className="btn btn-light ml-2 my-3 type-game">Another Game</button>
                <Slider {...settings}>
                    {dataNewGames.map((item) => (
                        <div className="card-slider">
                            <div className="card-top">
                                <img
                                    src={
                                        defaultImage[item.title] === item.title
                                            ? defaultImage.linkDefault
                                            : item.linkImg
                                    }
                                    alt={item.title}
                                    onError={handleErrorImage}
                                />
                                <h1 className="title-game">{item.title}</h1>
                            </div>
                            <div className="card-bottom">
                                <span className="category">{item.category}</span>
                            </div>
                            <button type="button" className="btn btn-outline-success btn-slider text-center" onClick={item.btn}>Play Now!</button>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
    // };
};

export default Home;
