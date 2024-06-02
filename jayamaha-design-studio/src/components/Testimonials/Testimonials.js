import React, { useRef } from "react"
import Slider from "react-slick"
import { AnimationOnScroll } from "react-animation-on-scroll"

import TestimonialImage from "../../assets/images/testimonialimg.png"
import "./Testimonials.css"

const Testimonials = () => {
  const tslider = useRef(null)

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className="testimonials-section">
      <div className="container text-center pt-5 pb-5">
        <div className="row justify-content-center testimonial-header">
          <hr
            className="align-items-center"
            style={{
              opacity: "unset",
            }}
          />
          <h1>Testimonials</h1>
          <p>
            Take a couple minutes to hear directly from LEAP clients about their
            experience working with us!
          </p>
        </div>

        <Slider ref={tslider} {...settings}>
          <div>
            <div className="testimonial-image">
              <AnimationOnScroll
                animateIn="animate__flipInX"
                animateOnce
                delay={3}
              >
                <img
                  src={TestimonialImage}
                  alt="testimonial"
                  className="image-fluid"
                />
              </AnimationOnScroll>
            </div>
            <div className="testimonial-name">Mr. Lahiru Thirimanne</div>

            <div className="testimonial-description">
              “I just had a fantastic experience with Jayamaha Design
              Studio.Int.Archt Pasindu Jayamaha did amazing job on my Apartment.
              Results are a great and the process was really fun. I would highly
              recommend!"
            </div>
          </div>

          <div className="testimonial-center-text">
            <div className="testimonial-name">Mrs. Kaushalya illangasingha</div>

            <div className="testimonial-description">
              “Thank you Archt Pasindu Jayamaha. Its a great design. I love it.
              I didn't even think that that space can turn into something like
              this good lokking and spacious. Let's do it!”
            </div>
          </div>

          <div className="testimonial-center-text">
            <div className="testimonial-name">Mrs. Samadhi Hondamuni</div>

            <div className="testimonial-description">
              “Thanks Archt. Pasindu Jayamaha for this masterpiece of a work!”
            </div>
          </div>

          <div className="testimonial-center-text">
            <div className="testimonial-name">Ms. Pandrika Sanyoji</div>

            <div className="testimonial-description">
              “Excellent service.. Highly recommended for everyone. Keep up the
              good work!”
            </div>
          </div>

          <div className="testimonial-center-text">
            <div className="testimonial-name">Mr. Archana Herath</div>

            <div className="testimonial-description">
              “Great collaboration, delivers excellent work. Highly recommended
              for everyone."
            </div>
          </div>

          <div className="testimonial-center-text">
            <div className="testimonial-name">Mrs. Dilani Upeksha</div>

            <div className="testimonial-description">
              “Well-Architected
              <br /> Best Practices
              <br /> Expert Guidance
              <br /> High Performance
              <br /> Professional Service "
            </div>
          </div>

          <div className="testimonial-center-text">
            <div className="testimonial-name">Ms. Reeza Riffai</div>

            <div className="testimonial-description">
              “Fantastic place! The staff is very professional who understood
              our needs very well. The designs were within our budget and very
              modern! Finally, an experience centre which understands modern
              designs.”
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials
