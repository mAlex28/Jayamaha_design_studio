import React from "react"
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"
import { Link } from "react-router-dom"

import Logo from "../../assets/images/logo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-muted"
      style={{
        backgroundColor: "#000000",
      }}
    >
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <img
                src={Logo}
                alt="logo of the jayamaha design studio"
                className="mt-4 footer-image"
              />
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <Link
                style={{
                  textDecoration: "none",
                }}
                to="/"
              >
                <h6 className="mb-4 footer-headings"> Home </h6>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                }}
                to="/about"
              >
                <h6 className="mb-4 footer-headings"> About Us </h6>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                }}
                to="/portfolio"
              >
                <h6 className="mb-4 footer-headings"> Portfolio </h6>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                }}
                to="/services"
              >
                <h6 className="mb-4 footer-headings"> Services </h6>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                }}
                to="/faq"
              >
                <h6 className="mb-4 footer-headings"> FAQs </h6>
              </Link>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="mb-4 footer-headings">Contact</h6>
              <Link
                style={{
                  textDecoration: "none",
                }}
                to="#"
                onClick={(e) => {
                  window.location.href =
                    "mailto:jayamahadesignsstudio@gmail.com"
                  e.preventDefault()
                }}
              >
                <p
                  className="footer-contacts"
                  style={{
                    color: "#e9e9e9",
                  }}
                >
                  <FaEnvelope className="me-3 footer-contacts" />
                  <span
                    className="footer-contacts"
                    style={{ fontSize: "14px" }}
                  >
                    jayamahadesignsstudio
                  </span>
                </p>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                }}
                to="#"
                onClick={(e) => {
                  window.location.href = "tel:+94716389178"
                  e.preventDefault()
                }}
              >
                <p
                  className="footer-contacts"
                  style={{
                    color: "#e9e9e9",
                  }}
                >
                  <FaPhoneAlt className="me-3 footer-contacts" />
                  <span
                    className="footer-contacts"
                    style={{ fontSize: "14px" }}
                  >
                    +94 716 389 178
                  </span>
                </p>
              </Link>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="mb-4 footer-headings">Follow Us</h6>
              <a
                href="https://www.facebook.com/jayamahadesignstudio/"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                }}
              >
                {" "}
                <FaFacebookF color="#e9e9e9" className="footer-follow-icon" />
              </a>
              <a
                href="https://www.instagram.com/jayamaha_design_studio/"
                style={{
                  textDecoration: "none",
                }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaInstagram color="#e9e9e9" className="footer-follow-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/pasindujayamaha/"
                style={{
                  textDecoration: "none",
                }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaLinkedinIn color="#e9e9e9" className="footer-follow-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <div className="text-center pt-3 pl-4 pr-4 pb-3 footer-bottom">
        <a
          href="https://www.instagram.com/hivlix/"
          style={{
            textDecoration: "none",
          }}
          target="_blank"
          rel="noreferrer"
        >
          2022 © hivlix. All rights reserved
        </a>
      </div>
    </footer>
  )
}

export default Footer
