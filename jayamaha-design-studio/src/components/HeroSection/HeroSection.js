import React, { useRef } from "react"
import { Link } from "react-router-dom"
import { AnimationOnScroll } from "react-animation-on-scroll"
import Slider from "react-slick"

import LandingImage1 from "../../assets/images/landing_image_1.png"
import LandingImage2 from "../../assets/images/landing_image_2.png"
import LandingImage3 from "../../assets/images/landing_image_3.png"

import "./HeroSection.css"

const HeroSection = () => {
  const heroSlider = useRef(null)

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="hero-slider">
      <Slider ref={heroSlider} {...settings}>
        <header className="header-home-1">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                <div className="hero justify-content-center">
                  <AnimationOnScroll
                    animateIn="animate__backInDown"
                    animateOnce
                    delay={5}
                  >
                    <h2 className="text-light font-weight-bold display-4 pb-4">
                      A Firm of Experienced Professionals.
                    </h2>
                  </AnimationOnScroll>

                  <Link to="/portfolio" className="hero-button">
                    Explore more
                  </Link>
                </div>
              </div>
              <div className="col-4 landing-image-div">
                <AnimationOnScroll
                  animateIn="animate__slideInRight"
                  animateOnce
                  delay={5}
                >
                  <img
                    src={LandingImage1}
                    alt="Landing 1"
                    className="img-fluid landing-image"
                  />
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </header>
        <header className="header-home-2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                <div className="hero justify-content-center">
                  <h2 className="text-light font-weight-bold display-4 pb-4">
                    We provide you the quality with perfect credibility.
                  </h2>

                  <Link to="/portfolio" className="hero-button">
                    Explore more
                  </Link>
                </div>
              </div>
              <div className="col-4 landing-image-div">
                <img
                  src={LandingImage2}
                  alt="Landing 2"
                  className="img-fluid landing-image"
                />
              </div>
            </div>
          </div>
        </header>
        <header className="header-home-3">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                <div className="hero justify-content-center">
                  <h2 className="text-light font-weight-bold display-4 pb-4">
                    A enshrined residence with a selection of best interior
                    design
                  </h2>
                  <Link to="/portfolio" className="hero-button">
                    Explore more
                  </Link>
                </div>
              </div>
              <div className="col-4 landing-image-div">
                <img
                  src={LandingImage3}
                  alt="Landing 1"
                  className="img-fluid landing-image"
                />
              </div>
            </div>
          </div>
        </header>
      </Slider>
    </div>
  )
}

export default HeroSection
