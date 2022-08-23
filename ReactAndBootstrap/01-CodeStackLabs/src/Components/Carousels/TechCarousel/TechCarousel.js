import React, { useState } from "react";
import "./TechCarousel.css";
import CarouselData from "./TechCarousel.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function TechCarousel() {
  // const [lowerRange, setLowerRange] = useState(0);
  // const [upperRange, setUpperRange] = useState(6);
  // const [mobLow, setMobLow] = useState(0);
  // const [mobUp, setMobUp] = useState(2);

  // setTimeout(() => {
  //   if (upperRange >= CarouselData.length) {
  //     setUpperRange(6);
  //     setLowerRange(0);
  //   } else {
  //     setUpperRange(upperRange + 1);
  //     setLowerRange(lowerRange + 1);
  //   }
  // }, 2000);
  // setTimeout(() => {
  //   if (upperRange >= CarouselData.length) {
  //     setMobLow(0);
  //     setMobUp(2);
  //   } else {
  //     setMobLow(mobLow + 1);
  //     setMobUp(mobUp + 1);
  //   }
  // }, 2000);
  // const handlePrev = () => {
  //   if (upperRange <= 6) {
  //     setUpperRange(6);
  //     setLowerRange(0);
  //   } else {
  //     setUpperRange(upperRange - 1);
  //     setLowerRange(lowerRange - 1);
  //   }
  // };
  // const handleNext = () => {
  //   if (upperRange >= CarouselData.length) {
  //     setUpperRange(6);
  //     setLowerRange(0);
  //   } else {
  //     setUpperRange(upperRange + 1);
  //     setLowerRange(lowerRange + 1);
  //   }
  // };
  // console.log("length", CarouselData.length);
  // console.log("upperRange", upperRange);
  // console.log("lowerRange", lowerRange);

  // React slick
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-100">
        <div data-aos="zoom-in-up" className="container-fluid px-0">
          <Slider {...settings}>
            {CarouselData.map((item, id) => (
              <div key={id} className="p-3">
                <img className={item.class} src={item.img} alt={item.title} />
                <h5 className="small_heading text-white">{item.title}</h5>
              </div>
            ))}
          </Slider>

          {/* <div className="row my-5 d-none d-md-flex">
            {CarouselData.slice(lowerRange, upperRange).map((item, id) => (
              <div key={id} className="col-6 col-md-2 hero_img">
                <img className={item.class} src={item.img} alt={item.title} />
                <h5 className="small_heading text-white">{item.title}</h5>
              </div>
            ))}
          </div>
          <div className="row my-5 d-flex d-md-none">
            {CarouselData.slice(mobLow, mobUp).map((item, id) => (
              <div key={id} className="col-6 col-md-2 hero_img">
                <img className={item.class} src={item.img} alt={item.title} />
                <h5 className="small_heading text-white">{item.title}</h5>
              </div>
            ))}
          </div> */}

          {/* <div className="buttons d-flex justify-content-between">
            <button className="caro_Btn" onClick={() => handlePrev()}>
              Prev
            </button>
            <button className="caro_Btn" onClick={() => handleNext()}>
              Next
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
