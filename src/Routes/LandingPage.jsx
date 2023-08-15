import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate,Link } from "react-router-dom";
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
  const responsiveMini = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
      draggable={true}
      showDots={true}
      responsive={responsive}
      infinite={true}
      // autoPlay={deviceType !== "mobile" ? true : false}
      // autoPlaySpeed={3500}
      customTransition="transform 700ms ease-out"
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemAriaLabel="as"
    >
      <div className="bannerImgWrapper" style={{backgroundImage: `linear-gradient(rgba(139, 139, 139, 0.5),rgba(0, 0, 0, 0.5)),url(${"images/kyotPeek.jpg"})`}}>
        <div className="bannerImgContent position-absolute" style={{left:"2rem", top:"20%",color:"white"}}>
          <h1 className="fs-1" >Pet Burritos!!</h1>
          <p>Get blankets for your pets!</p>
          <Link to="/">
            <button className="mg-y-sm btn btn-light" style={{border:'none', padding:"0.3rem 0.7rem"}}>Browse Catalogue</button>
          </Link>
        </div>
      </div>
      <div className="bannerImgWrapper" style={{backgroundImage: `linear-gradient(rgba(139, 139, 139, 0.5),rgba(0, 0, 0, 0.5)),url(${"images/kyotAsleep.jpg"})`}}/>
      <div className="bannerImgWrapper" style={{backgroundImage: `linear-gradient(rgba(139, 139, 139, 0.5),rgba(0, 0, 0, 0.5)),url(${"images/majestic.jpg"})`}}/>
      <div className="bannerImgWrapper" style={{backgroundImage: `linear-gradient(rgba(139, 139, 139, 0.5),rgba(0, 0, 0, 0.5)),url(${"images/kyotPeek3.jpg"})`}}/>
    </Carousel>
    <Carousel
      pauseOnHover={false}
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsiveMini}
      infinite={true}
      autoPlay={deviceType !== "mobile" ? true : false}
      autoPlaySpeed={3500}
      customTransition="transform 700ms ease-out"
      containerClass="carousel-container-mini"
      itemClass="carouselItem"
      removeArrowOnDeviceType={[]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemAriaLabel="as"
    >
      <div className="bannerImgWrapper miniBanner" style={{backgroundImage: `linear-gradient(rgba(139, 139, 139, 0.5),rgba(0, 0, 0, 0.5)),url(${"images/kyotPeek.jpg"})`}}>

      </div>
      <div className="bannerImgWrapper miniBanner" style={{backgroundImage: `linear-gradient(rgba(139, 139, 139, 0.5),rgba(0, 0, 0, 0.5)),url(${"images/kyotPeek.jpg"})`}}>

      </div>
      <div className="bannerImgWrapper miniBanner" style={{backgroundImage: `linear-gradient(rgba(139, 139, 139, 0.5),rgba(0, 0, 0, 0.5)),url(${"images/kyotPeek.jpg"})`}}>

      </div>
      <div className="bannerImgWrapper miniBanner" style={{backgroundImage: `linear-gradient(rgba(139, 139, 139, 0.5),rgba(0, 0, 0, 0.5)),url(${"images/kyotPeek.jpg"})`}}>

      </div>
      <div className="bannerImgWrapper miniBanner" style={{backgroundImage: `linear-gradient(rgba(139, 139, 139, 0.5),rgba(0, 0, 0, 0.5)),url(${"images/kyotPeek.jpg"})`}}>

      </div>
    </Carousel>
    </>
  );
}

export default LandingPage;
