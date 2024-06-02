import React, { useState } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import { useFormspark } from "@formspark/use-formspark"
import { AiOutlineSend } from "react-icons/ai"
import {
  FaFacebookF,
  FaInstagram,
  FaRegEnvelope,
  FaLinkedinIn,
} from "react-icons/fa"
import { FiMapPin, FiPhone } from "react-icons/fi"

import CustomNavbar from "../../Navbar/Navbar"
import Footer from "../../Footer/Footer"
import "./Contact.css"

const FORMSPARK_FORM_ID = "Cujtk5Ys"

const Contact = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  })

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
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
      <div className="contact-page-div">
        <div className="contact-page-section">
          <section className="container d-flex justify-content-center align-items-center">
            <div className="w-100 contact-box">
              <div className="contact-header text-center">
                <div className="row justify-content-center">
                  <h1>Contact Us</h1>
                  <hr
                    style={{
                      width: "100px",
                      border: "2.5px solid #845f42",
                      borderRadius: "15px",

                      opacity: "unset",
                    }}
                  />
                </div>
              </div>

              <div className="contact-page-form-wrapper">
                <Form onSubmit={onSubmit} className="contact-page-form">
                  <Form.Floating className="mb-4 contact-page-form-group">
                    <Form.Control
                      id="floatingInputCustom"
                      onChange={handleChange}
                      type="email"
                      placeholder="name@example.com"
                      name="email"
                      required
                      className="form-control-input"
                    />
                    <label
                      htmlFor="floatingInputCustom"
                      className="from-control-input-label"
                    >
                      Email address
                    </label>
                  </Form.Floating>

                  <Form.Floating className="mb-4 contact-page-form-group">
                    <Form.Control
                      id="floatingInputCustom"
                      onChange={handleChange}
                      type="text"
                      name="name"
                      className="form-control-input"
                      placeholder="John Smith"
                      required
                    />
                    <label
                      htmlFor="floatingInputCustom"
                      className="from-control-input-label"
                    >
                      Name
                    </label>
                  </Form.Floating>

                  <Form.Floating className="mb-4 contact-page-form-group">
                    <Form.Control
                      as="textarea"
                      name="message"
                      onChange={handleChange}
                      className="form-control-input"
                      placeholder="Leave a comment here"
                      style={{ height: "150px" }}
                      required
                    />
                    <label
                      htmlFor="floatingInputCustom"
                      className="from-control-input-label"
                    >
                      Message
                    </label>
                  </Form.Floating>

                  <Row>
                    <Col>
                      <div className="text-end">
                        <Button
                          variant="secondary"
                          type="submit"
                          disabled={submitting}
                          className="contact-page-button"
                        >
                          <AiOutlineSend className="contact-page-button-icon" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>

              <div className="contact-page-map-wrapper">
                <div className="row contact-page-map-row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 contact-page-map">
                    <div className="mapouter">
                      <div className="gmap_canvas">
                        <iframe
                          title="myMap"
                          width="100%"
                          height="500"
                          id="gmap_canvas"
                          src="https://maps.google.com/maps?q=Jayamaha%20Designs%20Studio%20230/3%20Ihala%20Bomiriya%20Kaduwela&t=&z=13&ie=UTF8&iwloc=&output=embed"
                          frameBorder="0"
                          scrolling="no"
                          marginHeight="0"
                          marginWidth="0"
                        ></iframe>
                        <a href="https://www.whatismyip-address.com/divi-discount/">
                          divi discount,
                        </a>
                        <a href="https://www.embedgooglemap.net">
                          embed google maps in website
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 contact-page-address">
                    <div className="contact-address-wrapper ">
                      <div className="row h-100">
                        <div className="col-12 col-md-6 my-auto contact-address-column">
                          <center>
                            <div className="contact-icon-border">
                              <FiMapPin size={"30px"} />
                            </div>
                            <h4>ADDRESS:</h4>
                            <div className="studio-address">
                              Jayamaha Designs Studio, <br />
                              230/3 Ihala Bomiriya,
                              <br />
                              Kaduwela
                            </div>
                          </center>
                        </div>
                        <div className="col-12 col-md-6 my-auto contact-address-column contact-studio-email">
                          <center>
                            <div className="contact-icon-border">
                              <FaRegEnvelope size={"30px"} />
                            </div>
                            <h4>EMAIL:</h4>
                            <div className="studio-email">
                              <span>jayamahadesignsstudio@gmail.com</span>
                            </div>
                          </center>
                        </div>
                        <div className="col-12 col-md-6 my-auto contact-address-column">
                          <center>
                            <div className="contact-icon-border">
                              <FiPhone size={"30px"} />
                            </div>
                            <h4>CALL US:</h4>
                            <div className="studio-number">+94 716 389 178</div>
                          </center>
                        </div>
                        <div className="col-12 col-md-6 my-auto contact-address-column contact-us-column">
                          <center>
                            <h4>CONTACT US</h4>
                            <span>Contact us for a free quote</span>
                            <div className="studio-social">
                              <a
                                href="https://www.facebook.com/jayamahadesignstudio/"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                <FaFacebookF
                                  size={"20px"}
                                  style={{ margin: "5px" }}
                                />
                              </a>
                              <a
                                href="https://www.instagram.com/jayamaha_design_studio/"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                {" "}
                                <FaInstagram
                                  size={"20px"}
                                  style={{ margin: "5px" }}
                                />
                              </a>
                              <a
                                href="https://www.linkedin.com/in/pasindujayamaha/"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                <FaLinkedinIn
                                  size={"20px"}
                                  style={{ margin: "5px" }}
                                />
                              </a>
                            </div>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
