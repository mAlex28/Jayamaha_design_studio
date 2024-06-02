import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"

import DesignInteriorOne from "../../assets/images/design_interior_1.png"

import DesignInteriorTwo from "../../assets/images/design_interior_2.png"
import "./Discover.css"

const Discover = () => {
  return (
    <section className="discover-section">
      <div className="container discover-container">
        <div className="row">
          <div className=" col-sm-12 col-md-12 col-lg-6 discover-header-container">
            <hr
              style={{
                width: "100px",
                border: "2.5px solid #845f42",
                borderRadius: "15px",
                opacity: "unset",
              }}
            />
            <AnimationOnScroll
              animateIn="animate__lightSpeedInLeft"
              animateOnce
              delay={3}
            >
              <h2 className="discover-header-text">
                Discover the best <span>interior design</span> for your sweet
                home.
              </h2>
            </AnimationOnScroll>
            <div className="discover-description-wrapper">
              <p className="discover-header-description pb-3">
                The Jayamaha Design Studio is the best interior company in Sri
                Lanka for all your stylish interior needs. We are the largest
                one stop shop for total custom interior solutions and furniture
                supplier in Sri Lanka for all corporate and residential interior
                needs. Our out-of-the-ordinary interior designs are perfectly
                suited to the modern and stylish interior needs of our clients.
                Durability with the finest materials, reliability with over two
                decades of unparalleled industry experience, and creativity with
                world-class designs from a team of highly skilled professional
                designers are the key pillars of Jayamaha Design Studio that we
                helps to remain the leader in custom interior solutions in Sri
                Lanka.
              </p>
            </div>

            <div className="discover-header-image-wrapper">
              <AnimationOnScroll
                animateIn="animate__lightSpeedInLeft"
                animateOnce
                delay={3}
              >
                <img
                  src={DesignInteriorTwo}
                  alt="design interior"
                  className="img-fluid discover-header-image"
                />
              </AnimationOnScroll>
            </div>
          </div>
          <div className=" col-sm-12 col-md-12 col-lg-6 discover-image-container">
            <div className="discover-image-wrapper">
              <AnimationOnScroll
                animateIn="animate__lightSpeedInRight"
                animateOnce
                delay={3}
              >
                <img
                  src={DesignInteriorOne}
                  alt="design interior"
                  className="img-fluid discover-image"
                />
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discover
