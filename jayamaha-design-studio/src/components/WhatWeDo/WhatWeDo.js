import React, { useRef } from "react"
import Slider from "react-slick"
import { AnimationOnScroll } from "react-animation-on-scroll"

import NumberOne from "../../assets/icons/Group_20.png"
import NumberTwo from "../../assets/icons/Group_21.png"
import NumberThree from "../../assets/icons/Group_22.png"
import NumberFour from "../../assets/icons/Group_23.png"
import PrevIcon from "../../assets/icons/prev.png"
import AfterIcon from "../../assets/icons/after.png"

import { WhatWeDoImages } from "./WhatWeDoImages"
import "./WhatWeDo.css"

const WhatWeDo = () => {
  const slider = useRef(null)

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className="what-we-do">
      <div className="container">
        <div className="row justify-content-center what-we-do-heading-container">
          <hr
            className="align-items-center wwd-heading-line"
            style={{ opacity: "unset" }}
          />
          <h1 className="wwd-heading text-center">What We Do</h1>
        </div>
        <div className="row what-we-do-items-container p-5">
          <div
            className="col-12 col-sm-12 col-md-12 col-lg-6 wwd-item"
            id="wwd-item-1"
          >
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              delay={3}
              animateOnce
            >
              <>
                <div
                  style={{
                    display: "inline-flex",
                  }}
                >
                  <img
                    src={NumberOne}
                    alt="number one"
                    className="wwd-item-image"
                  />
                  <h2 className="wwd-item-heading">
                    All kind of Architectural Designs
                  </h2>
                </div>
                <p className="wwd-item-text" align="justify">
                  The Jayamaha Design Studio is and architectural and design
                  firm in Sri Lanka, made up of highly creative and talented
                  designers. We specialize in architectural, interior and
                  furniture design. We have acquired extensive professional
                  expertise designing simple, advanced, complex, and iconic
                  buildings regardless of its, context or scope. Our project
                  provides a new beginning and is the result of an in-depth and
                  meticulous design process. The approach we take on every job
                  is considered a unique challenge and exciting opportunity to
                  transform the architectural design into a transcending
                  reality.
                </p>
              </>
            </AnimationOnScroll>
          </div>

          <div
            className="col-12 col-sm-12 col-md-12 col-lg-6 wwd-item"
            id="wwd-item-2"
          >
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              delay={4}
              animateOnce
            >
              <>
                <div
                  style={{
                    display: "inline-flex",
                  }}
                >
                  <img
                    src={NumberTwo}
                    alt="number two"
                    className="wwd-item-image"
                  />

                  <h2 className="wwd-item-heading">Interior Designs</h2>
                </div>
                <p className="wwd-item-text" align="justify">
                  Jayamaha Design Studio is Sri Lanka top full-service, luxury
                  interior design firm that has a reputation for perfection and
                  impeccable service. Our comprehensive design process begins
                  with a thorough understanding of your vision, preferences for
                  colors, patterns, and textures as well as a review of
                  collected inspirations. Once that is complete, our team
                  handles every single detail of your project to create a
                  cohesive environment that is unique to you. Every project is
                  spearheaded by our principal Interior Architect Pasindu
                  Jayamaha.
                </p>
              </>
            </AnimationOnScroll>
          </div>
          <div
            className="col-12 col-sm-12 col-md-12 col-lg-6 wwd-item"
            id="wwd-item-3"
          >
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              delay={5}
              animateOnce
            >
              <>
                <div
                  style={{
                    display: "inline-flex",
                  }}
                >
                  <img
                    src={NumberThree}
                    alt="number three"
                    className="wwd-item-image"
                  />

                  <h2 className="wwd-item-heading">Furniture Desings</h2>
                </div>
                <p className="wwd-item-text" align="justify">
                  At "Jayamaha Design Studio", we strive for the highest level
                  of "customer satisfaction" possible. Our highly experienced
                  production team and industry-leading customer service with
                  wider product selection, superior shopping experience, on-time
                  product delivery, affordable pricing and prompt resolution of
                  any issues have taken us to where we are in the industry
                  today. We invite you all to experience the incomparable
                  comfort with international standardized custom modern and
                  traditional furniture designs from "Jayamaha Design Studio".
                </p>
              </>
            </AnimationOnScroll>
          </div>
          <div
            className="col-12 col-sm-12 col-md-12 col-lg-6 wwd-item"
            id="wwd-item-4"
          >
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              delay={6}
              animateOnce
            >
              <>
                <div
                  style={{
                    display: "inline-flex",
                  }}
                >
                  <img
                    src={NumberFour}
                    alt="number four"
                    className="wwd-item-image"
                  />

                  <h2 className="wwd-item-heading">Landscape Designs</h2>
                </div>
                <p className="wwd-item-text" align="justify">
                  The Jayamaha Design Studio is interested in people and how
                  they connect to their physical, aesthetic, historical,
                  natural, recreational and spiritual landscape. At the heart of
                  our business is the recognition that landscape assessment is
                  based on more than just aesthetic or heritage interest. the
                  next 100 years.
                </p>
              </>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="row what-we-do-slider-container">
          <div
            className="col-2 wwd-slide-before d-flex justify-content-center align-items-center"
            onClick={() => slider?.current?.slickPrev()}
          >
            <img
              src={PrevIcon}
              alt="previous slide icon"
              className="wwd-slide-icon"
            />
          </div>
          <Slider
            ref={slider}
            {...settings}
            className="col-8 wwd-slide-image-container"
          >
            {WhatWeDoImages.map((image) => (
              <div className=" d-flex justify-content-center">
                <img
                  src={image}
                  alt="what we do slides"
                  className="wwd-slide-image"
                />
              </div>
            ))}
          </Slider>
          <div
            className="col-2 wwd-slide-after d-flex justify-content-center align-items-center"
            onClick={() => slider?.current?.slickNext()}
          >
            <img
              src={AfterIcon}
              alt="next slide icon"
              className="wwd-slide-icon"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
