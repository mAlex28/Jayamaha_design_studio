import React from "react"
import { useFormspark } from "@formspark/use-formspark"
import { useState } from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import FloatingLabelInput from "react-floating-label-input"

import ServiceOneImg from "../../../assets/images/service_1.jpeg"
import ServiceTwoImg from "../../../assets/images/service_2.jpeg"
import ServiceThreeImg from "../../../assets/images/service_3.jpeg"
import SubmitIcon from "../../../assets/icons/submit.png"
import ContactImg from "../../../assets/images/contact_img.png"
import CustomNavbar from "../../Navbar/Navbar"
import Footer from "../../Footer/Footer"
import "./Services.css"

const FORMSPARK_FORM_ID = "Cujtk5Ys"

const initialValues = {
  name: "",
  email: "",
  message: "",
}

const Services = () => {
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
      <div className="services-page-div">
        <section className="services-page-section">
          <div className="container services-page-container">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center text-center services-page-header-wrapper">
                <div className="services-page-header">
                  <h5>Services</h5>
                  <h1>
                    We design with <br /> an aesthetic sense
                  </h1>
                  <center>
                    <hr
                      style={{
                        width: "150px",
                        border: "2.5px solid #845F42",
                        borderRadius: "15px",
                        opacity: "unset",
                      }}
                    />
                  </center>
                  <p>
                    Jayamaha Design Studio is one of the top architectural
                    designers in Sri Lanka.
                    <br />
                    We offer a versatile range of architectural design services
                    that meet all your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="services-container">
              <div className="row services-space">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 services-space-col"></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 services-space-col"></div>
              </div>
              <div className="service-item-container">
                <div className="service-item-header">
                  <hr
                    style={{
                      width: "80px",
                      border: "2.5px solid #845f42",
                      borderRadius: "15px",
                      opacity: "unset",
                    }}
                  />
                  <h5>Services</h5>
                </div>
                <div className="service-item-content">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 service-desc-wrapper">
                      <div className="service-desc-content">
                        <h1>end-to-end architectural design</h1>
                        <p>
                          Designing a new home or renovating an old one is an
                          exciting adventure. One that comes with many
                          challenges and obstacles. But like any good adventure,
                          it will be worth it in the end. As you embark on this
                          journey, you need the right people by your side. We
                          understand the many concerns people have when building
                          their dream home. Whether you are moving into your
                          very first home or designing your forever family home,
                          we can help. We have a multi-faceted job. This
                          includes everything from the large-scale design of an
                          design to the selection of the smallest details. The
                          common thread running through all of their
                          responsiblities is to provide accurate design advice
                          to create a beautiful and functional residential home.
                          Essentially, we are creating a home that works for the
                          people who will live in it. Designing the layout of a
                          space, choosing the furniture that goes there,
                          choosing the fixtures for the room - these are some of
                          the many things included in our architectural design
                          services.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-desc-image-wrapper">
                      <AnimationOnScroll
                        animateIn="animate__fadeInRight"
                        animateOnce
                        delay={7}
                      >
                        <img
                          src={ServiceOneImg}
                          alt="service one"
                          className="img-fluid"
                        />
                      </AnimationOnScroll>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row services-space">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 services-space-col"></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 services-space-col"></div>
              </div>
              <div className="service-item-container service-item-two-container">
                <div className="row">
                  <div className="col-12 service-item-header service-item-two-header d-flex justify-content-end">
                    <div className="">
                      <hr
                        style={{
                          width: "80px",
                          border: "2.5px solid #845f42",
                          borderRadius: "15px",
                          opacity: "unset",
                        }}
                      />
                      <h5 className="d-flex justify-content-end">Services</h5>
                    </div>
                  </div>
                </div>
                <div className="service-item-content">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 order-1 order-sm-1 order-md-1 order-lg-2 service-desc-wrapper">
                      <div className="service-desc-content">
                        <h1>renovations and remodeling</h1>
                        <p>
                          Have you ever wanted to freshen up your home? Over
                          time, you may need to update your home decor or
                          remodel the kitchen. As your family grows, you may
                          also need to build a nursery or work office. Depending
                          on scale, design and budget, you can choose from a
                          wide range of home improvement projects. A redesign
                          could be the improvement of an obsolete structure to
                          make it more functional. Or update furniture in an
                          older home to make it look more modern. Or a complete
                          renovation of your home. Whether you need to change a
                          few things or something more substantial, our team of
                          seasoned architectural designers can guide you.
                          Whatever your renovation needs functional, aesthetic
                          or both we can help you create a home that matches
                          your current needs.
                        </p>
                        <p>
                          Jayamaha Design Studio offers home renovation and
                          interior design services to help you create a better
                          home. We use a combination of human and technological
                          factors to provide you with the best home renovation.
                          Our talented designers work closely with you to get a
                          clear idea of what you want and help you budget
                          accordingly. They also use state-of-the-art technology
                          and home improvement software to create realistic 3D
                          visualizations of their designs
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 order-2 order-sm-2 order-md-2 order-lg-1 service-desc-image-wrapper">
                      <AnimationOnScroll
                        animateIn="animate__fadeInLeft"
                        animateOnce
                        delay={7}
                      >
                        <img
                          src={ServiceTwoImg}
                          alt="service two"
                          className="img-fluid"
                        />
                      </AnimationOnScroll>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row services-space">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 services-space-col"></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 services-space-col"></div>
              </div>
              <div className="service-item-container service-item-three-container">
                <div className="service-item-header">
                  <hr
                    style={{
                      width: "80px",
                      border: "2.5px solid #845f42",
                      borderRadius: "15px",
                      opacity: "unset",
                    }}
                  />
                  <h5>Services</h5>
                </div>
                <div className="service-item-content">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 service-desc-wrapper">
                      <div className="service-desc-content">
                        <h1>Design Consultancy</h1>
                        <p>
                          Not sure what your architectural design needs are? Our
                          design consultants can help you identify your needs
                          and issues and suggest solutions accordingly. We work
                          with you to understand what you need to change in your
                          home and provide residential interior design
                          advice.The best part? It's a two-way street. We can
                          tell you about our own design process and philosophy.
                          We can talk about where we source our materials from
                          and what design costs would be. The initial
                          conversation with a team member may be all you need.
                          If things work out, it's the start of a lasting
                          relationship for us.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 service-desc-image-wrapper">
                      <AnimationOnScroll
                        animateIn="animate__fadeInRight"
                        animateOnce
                        delay={7}
                      >
                        <img
                          src={ServiceThreeImg}
                          alt="service three"
                          className="img-fluid"
                        />
                      </AnimationOnScroll>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row services-space">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 services-space-col"></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 services-space-col"></div>
              </div>
            </div>
            <div className="services-contact-container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 services-d-wrapper services-d-wrapper-one">
                  <div className="services-contact-section-description-wrapper">
                    <div className="services-contact-image-wrapper">
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
                    <div className="services-call-us-on">
                      <h6>
                        <span>Call Us On:</span> +94 716 389 178
                      </h6>
                    </div>
                    <div className="services-dm-us-on">
                      <h6>
                        <span>DM Us On:</span> Jayamahadesignsstudio@gmail.com
                      </h6>
                    </div>
                    <div className="services-contact-descp-para">
                      Email us with any questions or inquiries or call +94 716
                      389 178. We would be happy to answer your questions
                      regarding any design work and set up meeting with you.
                      Fill out the form and let us know what you are thinking.
                      We&apos;d love to connect with you.
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 pcs-d-wrapper services-contact-section-form">
                  <div className="services-contact-section-form-wrapper">
                    <h1>Let's get connected..</h1>
                    <form onSubmit={onSubmit}>
                      <div className="services-form-input-group">
                        <FloatingLabelInput
                          id="name-input"
                          label="Name"
                          onChange={handleChange}
                          defaultValue={contactForm.name}
                          name="name"
                          required
                          type="text"
                          className="services-input-label-contact"
                        />
                      </div>
                      <div className="form-group services-form-input-group">
                        <FloatingLabelInput
                          id="email-input"
                          label="Email"
                          onChange={handleChange}
                          required
                          name="email"
                          defaultValue={contactForm.email}
                          type="email"
                          className="services-input-label-contact"
                        />
                      </div>
                      <div className="services-form-input-group">
                        <FloatingLabelInput
                          id="message-input"
                          label="Message"
                          onChange={handleChange}
                          defaultValue={contactForm.message}
                          type="text"
                          name="message"
                          required
                          className="services-input-label-contact"
                        />
                      </div>
                      <div className="services-contact-submit-button-wrap">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="primary-btn services-contact-submit align-items-end"
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

export default Services
