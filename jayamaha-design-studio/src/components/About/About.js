import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import { Link } from "react-router-dom"

import AboutImage from "../../assets/images/about.png"
import "./About.css"

const About = () => {
  return (
    <section className="about p-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 about-part justify-content-end">
            <div className="row align-items-center">
              <div className="about-img-container col-12 col-sm-12 col-md-6 col-lg-8">
                <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce>
                  <img src={AboutImage} alt="about" className="about-img" />
                </AnimationOnScroll>
              </div>
              <div className="about-text-container col-12 col-sm-12 col-md-6 col-lg-4">
                <AnimationOnScroll
                  animateIn="animate__slideInRight"
                  delay={4}
                  animateOnce
                >
                  <div className="about-text">
                    <hr />
                    <h2>About Us</h2>
                    <p>
                      Jayamaha Design Studio is and architectural and design
                      firm in sri lanka,made up of highly creative and talented
                      designers.We specialize in architectural,interior and
                      furniture design.We have acquired extensive professional
                      expertise designing simple,advanced,complex and iconin
                      buildings regardless of its,context or scope.Our project
                      provides a new beginning and is the result of an in-depth
                      and meticulouse design process.
                    </p>
                  </div>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 contact-part">
            <div className="contact-part-mid">
              <center>
                <h5>Call Us Now:</h5>
              </center>
              <center>
                <span>+94 716-389-178</span>
              </center>
              <center>
                <AnimationOnScroll
                  animateIn="animate__shakeY"
                  delay={5}
                  animateOut="animate__bounceOutRight"
                >
                  <button className="contact-btn">
                    <Link
                      to="/contact"
                      style={{
                        color: "#ffff",
                        textDecoration: "none",
                      }}
                    >
                      Get a free Quote
                    </Link>
                  </button>
                </AnimationOnScroll>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
