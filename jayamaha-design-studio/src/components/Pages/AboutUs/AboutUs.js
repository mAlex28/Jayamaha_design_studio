import React, { useState } from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import FloatingLabelInput from "react-floating-label-input"
import { useFormspark } from "@formspark/use-formspark"
import { Link } from "react-router-dom"

import AboutShowCaseImgOne from "../../../assets/images/about_1.png"
import AboutShowCaseImgTwo from "../../../assets/images/about_2.png"
import AboutShowCaseImgThree from "../../../assets/images/about_3.png"
import AboutUsImg from "../../../assets/images/about_us.png"
// import CeoImg from "../../../assets/images/ceo.jpeg"
import CeoImg from "../../../assets/images/fb.jpg"
import ConsultIconOne from "../../../assets/images/stage_1_icon.png"
import DesignIconTwo from "../../../assets/images/stage_2_icon.png"
import ConstructionIconThree from "../../../assets/images/stage_3_icon.png"
import CompleteIconFour from "../../../assets/images/stage_4_icon.png"
import NextIcon from "../../../assets/icons/after.png"

import ContactImg from "../../../assets/images/contact_img.png"
import SubmitIcon from "../../../assets/icons/submit.png"
import CustomNavbar from "../../Navbar/Navbar"
import Footer from "../../Footer/Footer"
import "./AboutUs.css"

const FORMSPARK_FORM_ID = "Cujtk5Ys"

const initialValues = {
  name: "",
  email: "",
  message: "",
}
const AboutUs = () => {
  const [contactForm, setContactForm] = useState(initialValues)
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    await submit(contactForm)
    alert("Form submitted")
    clear()
  }

  const clear = () => {
    setContactForm({
      name: "",
      email: "",
      message: "",
    })
  }

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })
  }

  return (
    <>
      <CustomNavbar />
      <main className="aboutpage">
        <header className="header-about">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="hero justify-content-center">
                  <AnimationOnScroll
                    animateIn="animate__backInDown"
                    animateOnce
                    delay={5}
                  >
                    <center>
                      <div className="about-page-header-wrapper">
                        <h2 className="text-light font-weight-bold display-4 pb-4">
                          We'll build your dream house
                        </h2>
                        <hr
                          style={{
                            width: "200px",
                            border: "3px solid #845F42",
                            backgroundColor: "#845F42",
                            borderRadius: "15px",
                            opacity: "unset",
                          }}
                        />
                      </div>
                    </center>
                  </AnimationOnScroll>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="aboutus-page-page-div">
          <section className="aboutus-page-page-section">
            <div className="container aboutus-page-page-container">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-center text-center aboutus-page-page-header-wrapper">
                  <div className="aboutus-page-page-header">
                    <center>
                      <hr
                        style={{
                          width: "150px",
                          border: "2.5px solid #845f42",
                          borderRadius: "15px",
                          opacity: "unset",
                        }}
                      />
                    </center>
                    <h5>Who we are</h5>
                    <h1>Better Living, Unique Design</h1>
                    <p>
                      Jayamaha Design Studio is and architectural and design
                      firm in Sri Lanka, made up of highly creative and talented
                      designers. We specialize in architectural,interior and
                      furniture design. We have acquired extensive professional
                      expertise designing simple, advanced, complex and iconic
                      buildings regardless of its, context or scope. Our project
                      provides a new beginning and is the result of an in-depth
                      and meticulouse design process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="aboutus-page-projects-container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 about-showcase-img">
                    <AnimationOnScroll
                      animateIn="animate__zoomIn"
                      animateOnce
                      delay={5}
                    >
                      <img
                        src={AboutShowCaseImgOne}
                        alt="about showcase one"
                        className="img-fluid"
                      />
                    </AnimationOnScroll>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 about-showcase-img">
                    <AnimationOnScroll
                      animateIn="animate__zoomIn"
                      animateOnce
                      delay={6}
                    >
                      <img
                        src={AboutShowCaseImgTwo}
                        alt="about showcase two"
                        className="img-fluid"
                      />
                    </AnimationOnScroll>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 about-showcase-img">
                    <AnimationOnScroll
                      animateIn="animate__zoomIn"
                      animateOnce
                      delay={7}
                    >
                      <img
                        src={AboutShowCaseImgThree}
                        alt="about showcase three"
                        className="img-fluid"
                      />
                    </AnimationOnScroll>
                  </div>
                </div>
              </div>
              <div className="aboutus-page-ceo-container">
                <div className="row pt-5 pb-5">
                  <div className="col-md-12 d-flex justify-content-center text-center aboutus-page-page-header-wrapper">
                    <div className="aboutus-page-page-header">
                      <center>
                        <hr
                          style={{
                            width: "150px",
                            border: "2.5px solid #845f42",
                            borderRadius: "15px",
                            opacity: "unset",
                          }}
                        />
                      </center>
                      <h5>Word From CEO</h5>
                      <h1>Think, Design, Built</h1>
                      <p>
                        Don&apos;t hesitate to expense, just talk with an
                        Architectural designer professional
                      </p>
                    </div>
                  </div>
                  <div className="aboutus-page-ceo-img">
                    <center>
                      <AnimationOnScroll
                        animateIn="animate__fadeInTopLeft"
                        animateOnce
                        delay={7}
                      >
                        <img
                          src={CeoImg}
                          alt="CEO Int.Arch. Pasindu Jayamaha"
                          className="img-fluid"
                        />
                      </AnimationOnScroll>
                      <div className="aboutus-ceo-info-wrapper">
                        <div className="ceo-quote">
                          <p>
                            "I try to give people a different way of looking at
                            their surroundings. That's art to me."
                          </p>
                          <span>- Int.Arch. Pasindu Jayamaha -</span>
                        </div>
                        <div className="ceo-info">
                          <p
                            style={{
                              paddingBottom: "20px",
                            }}
                          >
                            Jayamaha Design Studio is and architectural and
                            design firm in sri lanka,made up of highly creative
                            and talented designers.We specialize in
                            architectural,interior and furniture design.We have
                            acquired extensive professional expertise designing
                            simple,advanced,complex and iconin buildings
                            regardless of its,context or scope.Our project
                            provides a new beginning and is the result of an
                            in-depth and meticulouse design process.
                          </p>
                          <p>
                            The approach we take on every job is considered a
                            unique challange and exciting opportunity to
                            transform the architectural design into a
                            transcending reality.Our ambition is simple to
                            devolop the most efficient and dynamic interior
                            designs and modern home design,be it
                            residential,commercial or recreational including
                            restuarants,villas,spas,resorts and hotels.We listen
                            to our clients at the start of the
                            process.Understanding their needs and aspirations on
                            house designs,but not limiting ourselves to the
                            brief.Instead,we aim to produce design-led solutions
                            which are tailor made visualize their context which
                            were unable to be expressed in mere words.
                          </p>
                        </div>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
              <div className="aboutus-page-aboutus">
                <div className="aboutus-page-page-header">
                  <hr
                    style={{
                      width: "100px",
                      border: "2.5px solid #845f42",
                      borderRadius: "15px",

                      opacity: "unset",
                    }}
                  />
                  <h5>About Us</h5>
                  <h1>Innovative, creative and stylish</h1>
                </div>
                <div className="aboutus-page-aboutus-content">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 aboutus-page-desc-wrapper">
                      <div className="aboutus-page-desc-content">
                        <p>
                          This modern luxury apartment is located in the town of
                          Havelock City, Colombo, Sri Lanka. The owner is a
                          businessman. We all love the idea of luxury. But while
                          there may be a certain style of interior design that
                          evokes the word, isn't true luxury just being able to
                          create the space you want.Just because you can afford
                          those generic luxury attributes like gold fixtures and
                          large kitchens doesn't mean such a design will feel
                          luxurious. there are certainly common indicators of
                          plush design, including lush fabrics and of course,
                          the stunning reflective of gold accents, but there is
                          also a clear emphasis on the importance of comfort,
                          which makes any home a truly luxurious experience. i
                          made sure to create warm and comforting spaces.
                          Everything is handpicked.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 aboutus-page-desc-image-wrapper">
                      <AnimationOnScroll
                        animateIn="animate__fadeInRight"
                        animateOnce
                        delay={7}
                      >
                        <img
                          src={AboutUsImg}
                          alt="about us"
                          className="img-fluid"
                        />
                      </AnimationOnScroll>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aboutus-page-process">
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-center text-center aboutus-page-page-header-wrapper">
                    <div className="aboutus-page-page-header">
                      <center>
                        <hr
                          style={{
                            width: "150px",
                            border: "2.5px solid #845f42",
                            borderRadius: "15px",

                            opacity: "unset",
                          }}
                        />
                      </center>
                      <h5>Our Process</h5>
                      <h1>
                        Give your consent,
                        <br /> we design a perfect bend
                      </h1>
                      <center>
                        <p>
                          Interior design is a flourishing industry with
                          numerous prospects. Home furnishing businesses cater
                          to customers&apos; needs for home decoration and
                          furnishings. Establishing an interior design business
                          is an excellent method to furnish and beautify your
                          home.
                        </p>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="row aboutus-page-process-img-wrapper">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-3 pb-4 aboutus-page-process-one">
                    <div className="row d-flex align-items-center">
                      <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                        <div className="card text-center">
                          <div className="card-body">
                            <AnimationOnScroll
                              animateIn="animate__pulse"
                              animateOnce
                              delay={5}
                            >
                              <img
                                src={ConsultIconOne}
                                alt="initial consultation"
                              />
                            </AnimationOnScroll>
                            <h5 className="card-title">Initial Consultation</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-2 col-lg-2 aboutus-page-process-next-icon">
                        <img
                          src={NextIcon}
                          alt="next icon"
                          style={{
                            width: "64px",
                            height: "64px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-6 col-lg-3  pb-4 aboutus-page-process-two">
                    <div className="row d-flex align-items-center">
                      <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                        <div className="card text-center">
                          <div className="card-body">
                            <AnimationOnScroll
                              animateIn="animate__pulse"
                              animateOnce
                              delay={5}
                            >
                              <img
                                src={DesignIconTwo}
                                alt="design and costing"
                              />
                            </AnimationOnScroll>
                            <h5 className="card-title">Design &amp; Costing</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-2 col-lg-2 aboutus-page-process-next-icon">
                        <img
                          src={NextIcon}
                          alt="next icon"
                          style={{
                            width: "64px",
                            height: "64px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-3  pb-4 aboutus-page-process-three">
                    <div className="row d-flex align-items-center">
                      <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                        <div className="card text-center">
                          <div className="card-body">
                            <AnimationOnScroll
                              animateIn="animate__pulse"
                              animateOnce
                              delay={5}
                            >
                              <img
                                src={ConstructionIconThree}
                                alt="construction"
                              />
                            </AnimationOnScroll>
                            <h5 className="card-title">Construction</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-2 col-lg-2 aboutus-page-process-next-icon">
                        <img
                          src={NextIcon}
                          alt="next icon"
                          style={{
                            width: "64px",
                            height: "64px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-6 col-lg-3  pb-4 aboutus-page-process-four">
                    <div className="row d-flex align-items-center">
                      <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                        <div className="card text-center">
                          <div className="card-body">
                            <AnimationOnScroll
                              animateIn="animate__pulse"
                              animateOnce
                              delay={5}
                            >
                              <img
                                src={CompleteIconFour}
                                alt="project completion"
                              />
                            </AnimationOnScroll>
                            <h5 className="card-title">Project Completion</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aboutus-process-button">
                  <center>
                    <Link to="/how-it-works" className="process-button">
                      View More
                    </Link>
                  </center>
                </div>
              </div>
              <div className="aboutus-page-contact-container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 pcs-d-wrapper pcs-d-wrapper-one">
                    <div className="aboutus-page-contact-section-description-wrapper">
                      <div className="aboutus-page-contact-image-wrapper">
                        <AnimationOnScroll
                          animateIn="animate__lightSpeedInLeft"
                          animateOnce
                          delay={3}
                        >
                          <img
                            src={ContactImg}
                            alt="next icon"
                            className="img-fluid discover-header-image"
                          />
                        </AnimationOnScroll>
                      </div>
                      <div className="aboutus-page-call-us-on">
                        <h6>
                          <span>Call Us On:</span> +94 716 389 178
                        </h6>
                      </div>
                      <div className="aboutus-page-dm-us-on">
                        <h6>
                          <span>DM Us On:</span> Jayamahadesignsstudio@gmail.com
                        </h6>
                      </div>
                      <div className="aboutus-page-contact-descp-para">
                        Email us with any questions or inquiries or call +94 716
                        389 178. We would be happy to answer your questions
                        regarding any design work and set up meeting with you.
                        Fill out the form and let us know what you are thinking.
                        We&apos;d love to connect with you.
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 pcs-d-wrapper aboutus-page-contact-section-form">
                    <div className="aboutus-page-contact-section-form-wrapper">
                      <h1>Let's get connected..</h1>
                      <form onSubmit={onSubmit}>
                        <div className="aboutus-page-form-input-group">
                          <FloatingLabelInput
                            id="name-input"
                            label="Name"
                            onChange={handleChange}
                            defaultValue={contactForm.name}
                            name="name"
                            required
                            type="text"
                            className="aboutus-page-input-label-contact"
                          />
                        </div>
                        <div className="form-group aboutus-page-form-input-group">
                          <FloatingLabelInput
                            id="email-input"
                            label="Email"
                            onChange={handleChange}
                            required
                            name="email"
                            defaultValue={contactForm.email}
                            type="email"
                            className="aboutus-page-input-label-contact"
                          />
                        </div>
                        <div className="aboutus-page-form-input-group">
                          <FloatingLabelInput
                            id="message-input"
                            label="Message"
                            onChange={handleChange}
                            defaultValue={contactForm.message}
                            type="text"
                            name="message"
                            required
                            className="aboutus-page-input-label-contact"
                          />
                        </div>
                        <div className="aboutus-page-contact-submit-button-wrap">
                          <button
                            type="submit"
                            disabled={submitting}
                            className="primary-btn aboutus-page-contact-submit align-items-end"
                          >
                            <img
                              src={SubmitIcon}
                              alt="contact form submit icon"
                            />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default AboutUs
