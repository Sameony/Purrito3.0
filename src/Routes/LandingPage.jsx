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
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemAriaLabel="as"
    >
      <div className="bannerImgWrapper" style={{backgroundImage: `linear-gradient(rgba(139, 139, 139, 0.5),rgba(0, 0, 0, 0.5)),url(${"images/kyotPeek.jpg"})`}}/>
      <div className="bannerImgWrapper" style={{backgroundImage: `linear-gradient(rgba(139, 139, 139, 0.5),rgba(0, 0, 0, 0.5)),url(${"images/kyotAsleep.jpg"})`}}/>
      <div className="bannerImgWrapper" style={{backgroundImage: `linear-gradient(rgba(139, 139, 139, 0.5),rgba(0, 0, 0, 0.5)),url(${"images/majestic.jpg"})`}}/>
      <div className="bannerImgWrapper" style={{backgroundImage: `linear-gradient(rgba(139, 139, 139, 0.5),rgba(0, 0, 0, 0.5)),url(${"images/kyotPeek3.jpg"})`}}/>
    </Carousel>
    <div style={{height:"10rem", width:"90vw"}}></div>
    </>
  );
}

export default LandingPage;
