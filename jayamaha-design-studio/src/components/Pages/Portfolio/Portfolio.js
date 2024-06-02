import React, { useState, useRef, useEffect } from "react"
import Slider from "react-slick"
import { AnimationOnScroll } from "react-animation-on-scroll"
import FloatingLabelInput from "react-floating-label-input"
import { useFormspark } from "@formspark/use-formspark"
import ShowMoreText from "react-show-more-text"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

import ContactImg from "../../../assets/images/contact_img.png"
import SubmitIcon from "../../../assets/icons/submit.png"
// import PrevIcon from "../../../assets/icons/prev.png"
// import AfterIcon from "../../../assets/icons/after.png"
import CustomNavbar from "../../Navbar/Navbar"
import Footer from "../../Footer/Footer"
import "./Portfolio.css"

import { fetchProjects } from "../../../api"
import { portfolioItem } from "../../../api/PortfolioItems"

const FORMSPARK_FORM_ID = "Cujtk5Ys"

const initialValues = {
  name: "",
  email: "",
  message: "",
}

const Portfolio = () => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState({
    index: 0,
    opended: false,
  })
  const [isSortOpen, setIsSortOpen] = useState({
    index: 0,
    opended: false,
  })
  const [projects, setProjects] = useState([])
  const [contactForm, setContactForm] = useState(initialValues)
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  })
  const [isLoading, setIsLoading] = useState(true)

  const portfolioslider = useRef()

  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  useEffect(() => {
    const fetchAllProjects = async () => {
      const res = await fetchProjects()
      setProjects(res.data.data)
      setIsLoading(false)
    }

    fetchAllProjects()
  }, [])

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

  const sortedProjects = [...projects].sort((a, b) => b.projectDate.localeCompare(a.projectDate));

  return (
    <>
      <CustomNavbar />
      <div className="portfolio-page-div">
        <section className="portfolio-page-section">
          <div className="container portfolio-page-container">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center text-center portfolio-page-header-wrapper">
                <div className="portfolio-page-header">
                  <h5>Portfolio</h5>
                  <h1>We'll build your dream house.</h1>
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
                </div>
              </div>
            </div>
            <div className="portfolio-projects-container">
              <div className="row">

              </div>
              <div className="row">
                {
                  isLoading ? (
                    <div className="portfolio-projects-overlay">
                      <div className="d-flex flex-column align-items-center">
                        <div>
                          <div className="loading-spinner text-gold" role="status"></div>
                        </div>
                        <span className="mt-2">Loading... Please wait</span>
                      </div>
                    </div>
                  ) : (
                    sortedProjects.map((sproject, index) => (
                      <div
                        className="col-12 col-sm-12 col-md-12 col-lg-6 project-item-wrapper"
                        key={sproject._id}
                      >
                        <div className="project-item">
                          <AnimationOnScroll
                            animateIn="animate__zoomIn"
                            animateOnce
                            delay={3}
                          >
                            <>
                              <div className="row portfolio-image-slider d-flex justify-content-center">
                                <Slider
                                  ref={portfolioslider}
                                  {...settings}
                                  className="col-12"
                                >
                                  {sproject.projectImage.map((image) => (
                                    <div
                                      className="d-flex justify-content-center"
                                      onClick={() =>
                                        setIsSortOpen({ index: index, opended: true })
                                      }
                                    >
                                      <img
                                        src={image}
                                        alt="slider"
                                        className="img-responsive project-item-image"
                                      />
                                    </div>
                                  ))}
                                </Slider>
                              </div>
                              {isSortOpen.opended && isSortOpen.index === index && (
                                <Lightbox
                                  imageTitle={sproject.name}
                                  mainSrc={sproject.projectImage[photoIndex]}
                                  nextSrc={
                                    sproject.projectImage[
                                    (photoIndex + 1) % sproject.projectImage.length
                                    ]
                                  }
                                  prevSrc={
                                    sproject.projectImage[
                                    (photoIndex +
                                      sproject.projectImage.length -
                                      1) %
                                      sproject.projectImage.length
                                    ]
                                  }
                                  onCloseRequest={() => {
                                    setIsSortOpen({ index: -1, opended: false })
                                    setPhotoIndex(0)
                                  }}
                                  onMovePrevRequest={() =>
                                    setPhotoIndex(
                                      (photoIndex +
                                        sproject.projectImage.length -
                                        1) %
                                        sproject.projectImage.length
                                    )
                                  }
                                  onMoveNextRequest={() =>
                                    setPhotoIndex(
                                      (photoIndex + 1) % sproject.projectImage.length
                                    )
                                  }
                                />
                              )}
                              <div className="project-item-header">
                                <h1>{sproject.name}</h1>
                                <span>{sproject.location}</span>
                                <hr
                                  style={{
                                    width: "150px",
                                    border: "1px solid #845f42",
                                    borderRadius: "15px",
                                    opacity: "unset",
                                  }}
                                />
                              </div>
                              <div className="project-item-description">
                                <ShowMoreText
                                  lines={4}
                                  more="Show more"
                                  less="Show less"
                                  width={0}
                                  className="content-css"
                                  anchorClass="my-anchor-css-class"
                                  expanded={false}
                                  truncatedEndingComponent={"..."}
                                >
                                  {sproject.description}
                                </ShowMoreText>
                              </div>
                            </>
                          </AnimationOnScroll>
                        </div>
                      </div>
                    ))
                  )
                }
                {portfolioItem.map((project, index) => (
                  <div
                    className="col-12 col-sm-12 col-md-12 col-lg-6 project-item-wrapper"
                    key={project._id}
                  >
                    <div className="project-item">
                      <AnimationOnScroll
                        animateIn="animate__zoomIn"
                        animateOnce
                        delay={3}
                      >
                        <>
                          <div className="row portfolio-image-slider d-flex justify-content-center">
                            <Slider
                              ref={portfolioslider}
                              {...settings}
                              className="col-12"
                            >
                              {project.projectImage.map((image) => (
                                <div
                                  className="d-flex justify-content-center"
                                  onClick={() =>
                                    setIsOpen({ index: index, opended: true })
                                  }
                                >
                                  <img
                                    src={image}
                                    alt="slider"
                                    className="img-responsive project-item-image"
                                  />
                                </div>
                              ))}
                            </Slider>
                          </div>
                          {isOpen.opended && isOpen.index === index && (
                            <Lightbox
                              imageTitle={project.name}
                              mainSrc={project.projectImage[photoIndex]}
                              nextSrc={
                                project.projectImage[
                                (photoIndex + 1) % project.projectImage.length
                                ]
                              }
                              prevSrc={
                                project.projectImage[
                                (photoIndex +
                                  project.projectImage.length -
                                  1) %
                                project.projectImage.length
                                ]
                              }
                              onCloseRequest={() => {
                                setIsOpen({ index: -1, opended: false })
                                setPhotoIndex(0)
                              }}
                              onMovePrevRequest={() =>
                                setPhotoIndex(
                                  (photoIndex +
                                    project.projectImage.length -
                                    1) %
                                  project.projectImage.length
                                )
                              }
                              onMoveNextRequest={() =>
                                setPhotoIndex(
                                  (photoIndex + 1) % project.projectImage.length
                                )
                              }
                            />
                          )}
                          <div className="project-item-header">
                            <h1>{project.name}</h1>
                            <span>{project.location}</span>
                            <hr
                              style={{
                                width: "150px",
                                border: "1px solid #845f42",
                                borderRadius: "15px",
                                opacity: "unset",
                              }}
                            />
                          </div>
                          <div className="project-item-description">
                            <ShowMoreText
                              lines={4}
                              more="Show more"
                              less="Show less"
                              width={0}
                              className="content-css"
                              anchorClass="my-anchor-css-class"
                              expanded={false}
                              truncatedEndingComponent={"..."}
                            >
                              {project.description}
                            </ShowMoreText>
                          </div>
                        </>
                      </AnimationOnScroll>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="portfolio-contact-container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 pcs-d-wrapper pcs-d-wrapper-one">
                  <div className="portfolio-contact-section-description-wrapper">
                    <div className="portfolio-contact-image-wrapper">
                      <AnimationOnScroll
                        animateIn="animate__lightSpeedInLeft"
                        animateOnce
                        delay={3}
                      >
                        <img
                          src={ContactImg}
                          alt="contact"
                          className="img-fluid discover-header-image"
                        />
                      </AnimationOnScroll>
                    </div>
                    <div className="portfolio-call-us-on">
                      <h6>
                        <span>Call Us On:</span> +94 716 389 178
                      </h6>
                    </div>
                    <div className="portfolio-dm-us-on">
                      <h6>
                        <span>DM Us On:</span> Jayamahadesignsstudio@gmail.com
                      </h6>
                    </div>
                    <div className="portfolio-contact-descp-para">
                      Email us with any questions or inquiries or call +94 716
                      389 178. We would be happy to answer your questions
                      regarding any design work and set up meeting with you.
                      Fill out the form and let us know what you are thinking.
                      We&apos;d love to connect with you.
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 pcs-d-wrapper portfolio-contact-section-form">
                  <div className="portfolio-contact-section-form-wrapper">
                    <h1>Let's get connected..</h1>
                    <form onSubmit={onSubmit}>
                      <div className="portfolio-form-input-group">
                        <FloatingLabelInput
                          id="name-input"
                          label="Name"
                          onChange={handleChange}
                          defaultValue={contactForm.name}
                          name="name"
                          required
                          type="text"
                          className="portfolio-input-label-contact"
                        />
                      </div>
                      <div className="form-group portfolio-form-input-group">
                        <FloatingLabelInput
                          id="email-input"
                          label="Email"
                          onChange={handleChange}
                          required
                          name="email"
                          defaultValue={contactForm.email}
                          type="email"
                          className="portfolio-input-label-contact"
                        />
                      </div>
                      <div className="portfolio-form-input-group">
                        <FloatingLabelInput
                          id="message-input"
                          label="Message"
                          onChange={handleChange}
                          defaultValue={contactForm.message}
                          type="text"
                          name="message"
                          required
                          className="portfolio-input-label-contact"
                        />
                      </div>
                      <div className="portfolio-contact-submit-button-wrap">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="primary-btn portfolio-contact-submit align-items-end"
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
    </>
  )
}

export default Portfolio
