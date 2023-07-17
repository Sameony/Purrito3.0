import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
function LandingPage({deviceType}) {
  // const navigate = useNavigate();
  deviceType="desktop"
  useEffect(() => {
    // if(!sessionStorage.getItem("username"))
    // {
    //   navigate("/auth")
    // }
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <Carousel
      pauseOnHover={false}
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay={deviceType !== "mobile" ? true : false}
      autoPlaySpeed={3500}
      keyBoardControl={true}
      customTransition="transform 700ms ease-out"
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      itemAriaLabel="as"
    >
      <div className="bannerImgWrapper">
        <img className="imageFit" src="images/kyotPeek.jpg" alt="cat" />
      </div>
      <div className="bannerImgWrapper">
        <img className="imageFit" src="images/kyotAsleep.jpg" alt="cat" />
      </div>
      <div className="bannerImgWrapper">
        <img className="imageFit" src="images/majestic.jpg" alt="cat" />
      </div>
      <div className="bannerImgWrapper">
        <img className="imageFit" src="images/kyotPeek3.jpg" alt="cat" />
      </div>
    </Carousel>
    <div style={{height:"10rem", width:"90vw"}}></div>
    </>
  );
}

export default LandingPage;
