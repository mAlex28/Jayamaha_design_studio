import React from "react"
import ScrollToTop from "react-scroll-to-top"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

import About from "../../About/About"
import Contact from "../../Contact/Contact"
import Counter from "../../Counter/Counter"
import Discover from "../../Discover/Discover"
import Footer from "../../Footer/Footer"
import HeroSection from "../../HeroSection/HeroSection"
import HomeProjects from "../../HomeProjects/HomeProjects"
import CustomNavbar from "../../Navbar/Navbar"
import Testimonials from "../../Testimonials/Testimonials"
import WhatWeDo from "../../WhatWeDo/WhatWeDo"
import "./Home.css"
import SEO from "../../../SEO/SEO"

const Home = () => {
  return (
    <>
      <SEO />
      <CustomNavbar />
      <main className="homepage">
        <ScrollToTop
          smooth
          color="white"
          style={{ backgroundColor: "black" }}
        />
        <ul
          id="social-sidebar"
          style={{
            paddingLeft: "0",
          }}
        >
          <li>
            <a
              href="https://www.facebook.com/jayamahadesignstudio/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <FaFacebookF color="#e9e9e9" className="sidebar-follow-icon" />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jayamaha_design_studio/"
              style={{
                textDecoration: "none",
              }}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram color="#e9e9e9" className="sidebar-follow-icon" />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/pasindujayamaha/"
              style={{
                textDecoration: "none",
              }}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn color="#e9e9e9" className="sidebar-follow-icon" />
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
        <HeroSection />
        <Counter />
        <About />
        <WhatWeDo />
        <HomeProjects />
        <Testimonials />
        <Discover />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default Home
