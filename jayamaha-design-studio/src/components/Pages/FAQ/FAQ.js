import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"

import FAQImg from "../../../assets/images/faq.jpeg"
import CustomNavbar from "../../Navbar/Navbar"
import Footer from "../../Footer/Footer"
import "./FAQ.css"

const FAQ = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <CustomNavbar />
      <section className="faq-page-section">
        <div className="container faq-page-container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="section-title text-center"
                style={{
                  color: "#d89866",
                }}
              >
                <h1>FAQs</h1>
              </div>
            </div>
          </div>
          <div className="row faq-container">
            <div className="col-12 col-sm-12 col-md-12 col-lg-8">
              <div className="faq-accordian">
                <Accordion
                  allowZeroExpanded={true}
                  allowMultipleExpanded={true}
                >
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How does the interior design process begin?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        The process begins with a telephone consultation with
                        one of the Partners. We discuss your project and
                        organize the first introductory meeting either at our
                        office in Colombo or the meeting can be held via video
                        call. During this meeting, we will understand your needs
                        in more detail and also guide you through an overview of
                        our systems and our latest work. We will also answer all
                        your questions regarding design, project management,
                        budgets and deadlines.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What if I don&#39;t like the design? How many options do
                        I get?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We begin the design process with a thorough
                        understanding of your needs as well as your preferred
                        style. This is then followed by a concept presentation
                        during which we introduce you to three different design
                        concepts. In the unlikely event that you are not
                        satisfied with any of the concepts we have presented to
                        you, we will be happy to work on additional concepts at
                        no additional cost.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do you handle material selections?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Based on the concepts you approved, our team will visit
                        showrooms and select materials such as tiles, fabrics,
                        veneers, laminates, paint shades, etc. We will then
                        prepare a mood board for you, which you can see in our
                        office. If you prefer to visit any supplier with a
                        designer, this can also be arranged.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do I know that I will like the final outcome?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Our meticulous design process is structured to shape the
                        design gradually, allowing the concept to gradually
                        crystallize in your mind. The culmination of the design
                        process is the 3D view of the interiors. This gives you
                        a definitive idea of what the end result will look like
                        before the onsite execution begins.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How much will the renovation/interiors cost me?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Renovation costs vary greatly, but basically depend on
                        two main elements. The current state of the apartment
                        and the style you like. If the apartment you have
                        purchased has the floor, bathrooms, kitchen, wall
                        finishes and electricity already provided, the interior
                        fitting costs would be much lower than for a bare-bones
                        apartment. . Also, as a general rule, luxurious styles
                        tend to cost more than simpler styles.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do the fees work?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Our fees are billed at a flat rate. The fees would
                        depend on the scope of the work, the size of the
                        property and the estimated time commitments. We would be
                        able to quote you for the same following our first
                        meeting.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How long will it take to complete my home?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        This would depend on a number of factors such as the
                        size of the apartment or villa and also the current
                        condition of the property. However, as an indication,
                        the design phase can take between one and two months for
                        an apartment and two and four months for a villa.
                        Fitting out an apartment with existing flooring, wall
                        coverings and bathrooms usually takes between three and
                        four months. The interior renovation of a bare shell
                        apartment would typically take around six months.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can we import furniture? If so how much will that cost?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes of course. If you prefer to import your furniture,
                        we will provide you with all the necessary advice and
                        the options available.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Will your team help me the selection of accessories,
                        artworks, and soft furnishings?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Sure! We accompany you until you move into your
                        apartment. We will visit the suppliers, pre-select the
                        accessories and decorative objects as well as the
                        furnishing fabrics and then present our choices and our
                        opinions to you. We'll also help you select artwork and
                        prints to complement your interiors. If there is
                        something special that you need our help with, we will
                        be very happy to use our resources to help you acquire
                        it.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you offer support after the project is complete?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Absolutely. As a company, we believe in building lasting
                        relationships with our clients and raising the bar for
                        interior designers in India in all aspects of design,
                        construction and customer service. We're always here to
                        help you with any assistance you may need, whether it's
                        connecting you with a supplier, following up on a
                        warranty or scheduled maintenance.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              <img
                src={FAQImg}
                alt="faq"
                className="img-fluid"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default FAQ
