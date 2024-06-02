import { useFormspark } from "@formspark/use-formspark"
import { useState } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import { AnimationOnScroll } from "react-animation-on-scroll"
import FloatingLabelInput from "react-floating-label-input"
import { Link } from "react-router-dom"

import SubmitIcon from "../../../assets/icons/submit.png"
import ContactImg from "../../../assets/images/contact_img.png"
import StageOne from "../../../assets/images/stage_1.png"
import StageOneIcon from "../../../assets/images/stage_1_icon.png"
import StageTwo from "../../../assets/images/stage_2.png"
import StageTwoIcon from "../../../assets/images/stage_2_icon.png"
import StageThree from "../../../assets/images/stage_3.png"
import StageThreeIcon from "../../../assets/images/stage_3_icon.png"

import Footer from "../../Footer/Footer"
import CustomNavbar from "../../Navbar/Navbar"
import "./HowItWorks.css"

const FORMSPARK_FORM_ID = "Cujtk5Ys"

const initialValues = {
  name: "",
  email: "",
  message: "",
}

const HowItWorks = () => {
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
      <div className="how-it-works-page-div">
        <section className="how-it-works-page-section">
          <div className="container how-it-works-page-container">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center text-center how-it-works-page-header-wrapper">
                <div className="how-it-works-page-header">
                  <h5>How It Works</h5>
                  <h1>Our process for your dream build</h1>
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
                    The method we use is rigorous and comprehensive, with the
                    goal of helping to create a coherant vision for the project
                    while always keeping you and your needs at the heart of
                    every design.
                  </p>
                </div>
              </div>
            </div>
            <div className="how-it-works-steps-container">
              <div className="row stage-1-space">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 stage-1-space-col"></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 stage-1-space-col"></div>
              </div>
              <div className="row stage-1-wrapper">
                <div className="col-12 col-sm-12 col-md-12 col-lg-7 stage-1-accordian">
                  <hr
                    style={{
                      width: "100px",
                      border: "2.5px solid #845F42",
                      borderRadius: "15px",
                      opacity: "unset",
                    }}
                  />
                  <h3>Stage 1</h3>
                  <img
                    src={StageOneIcon}
                    alt="how it works stage one icon"
                    className="img-fluid stage-1-icon"
                  />
                  <h1>Get On-Boarding</h1>
                  <div className="accordian-one">
                    <AnimationOnScroll
                      animateIn="animate__fadeInLeft"
                      animateOnce
                      delay={3}
                    >
                      <Accordion
                        allowZeroExpanded={true}
                        allowMultipleExpanded={true}
                      >
                        <AccordionItem>
                          <AccordionItemHeading
                            style={{
                              color: "#d39564",
                            }}
                          >
                            <AccordionItemButton>
                              initial consultation
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              During the first consultation, we get to know you
                              to better understand if we are the right person.
                              We discuss your functional requirements as well as
                              design preferences and this is the time for you to
                              ask questions and clear up any doubts you may have
                              about the design process.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              fees quotation
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Once we have gained a deeper understanding of the
                              nature of the project and your requirements, we
                              will then share a fee quote for the design work.
                              This proposal will describe our scope of work in
                              detail and provide you with a clear understanding
                              of all services offered.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </AnimationOnScroll>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 stage-1-image">
                  <AnimationOnScroll
                    animateIn="animate__fadeInRight"
                    animateOnce
                    delay={3}
                  >
                    <img
                      src={StageOne}
                      alt="Stage One"
                      className="img-fluid image-1-stage"
                      height="100%"
                    />
                  </AnimationOnScroll>
                </div>
              </div>
              <div className="row stage-1-space">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 stage-1-space-col"></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 stage-1-space-col"></div>
              </div>
              <div className="row stage-1-wrapper">
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 order-2 order-sm-2 order-md-2 order-lg-1 stage-1-image">
                  <AnimationOnScroll
                    animateIn="animate__fadeInLeft"
                    animateOnce
                    delay={3}
                  >
                    <img
                      src={StageTwo}
                      alt="Stage Two"
                      className="img-fluid image-2-stage"
                    />
                  </AnimationOnScroll>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-7 order-1 order-sm-1 order-md-1 order-lg-2 stage-1-accordian">
                  <hr
                    style={{
                      width: "100px",
                      border: "2.5px solid #845F42",
                      borderRadius: "15px",
                      opacity: "unset",
                    }}
                  />
                  <h3>Stage 2</h3>
                  <img
                    src={StageTwoIcon}
                    alt="how it works stage two icon"
                    className="img-fluid stage-1-icon"
                  />
                  <h1>Design &amp; Costing</h1>
                  <div className="accordian-one">
                    <AnimationOnScroll
                      animateIn="animate__fadeInRight"
                      animateOnce
                      delay={3}
                    >
                      <Accordion
                        allowZeroExpanded={true}
                        allowMultipleExpanded={true}
                      >
                        <AccordionItem>
                          <AccordionItemHeading
                            style={{
                              color: "#d39564",
                            }}
                          >
                            <AccordionItemButton>
                              layout planning
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              The layout is what creates the basis of the whole
                              design. We start the design process by exploring
                              different internal configurations and give you
                              several options to consider. We then review all
                              possibilities with you in detail to ensure that
                              you select the option that meets all of your
                              unique functional requirements.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              design presentation
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Keeping your style preferences in mind, we present
                              several design concepts for each area of your
                              space. Each concept represents a distinct design
                              direction so you can better understand which style
                              suits your taste and lifestyle. These are
                              discussed with you in detail before a unique
                              design theme is finalized.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>3D views</AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Once the concept is established, we create 3D
                              models of the design with all the design elements,
                              finishes and furniture. This gives you a realistic
                              vision of what your space will look like when the
                              layout is complete.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              material selection
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              To streamline and simplify the selection process,
                              we assemble all material samples for you in our
                              office so that all materials and finishes can be
                              reviewed simultaneously. This process allows you
                              to visualize how multiple elements will fit
                              together and eventually lend themselves to a more
                              cohesive and harmonious design.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              building documents
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Once all design elements are finalized, our
                              skilled draftsmen create sets of detailed
                              construction documents which are then delivered to
                              the execution teams on site. Combined with
                              detailed material specifications, our thorough
                              construction drawings leave no room for ambiguity,
                              ensuring a smooth workflow and fast execution.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>costing</AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              In the case of our turnkey contract service, the
                              detailed cost of the project is determined in
                              tandem with the selection of materials and
                              construction documents to give you a broad
                              understanding of the project budget. This process
                              helps verify commercial viability earlier in the
                              process and minimize cost overruns.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </AnimationOnScroll>
                  </div>
                </div>
              </div>
              <div className="row stage-1-space">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 stage-1-space-col"></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 stage-1-space-col"></div>
              </div>
              <div className="row stage-3-wrapper">
                <div className="col-12">
                  <center>
                    <hr
                      style={{
                        width: "100px",
                        border: "2.5px solid #845F42",
                        borderRadius: "15px",
                        opacity: "unset",
                      }}
                    />
                    <h3>Stage 3</h3>
                    <img
                      src={StageThreeIcon}
                      alt="how it works stage three icon"
                      className="img-fluid stage-1-icon"
                    />
                    <h1>Construction</h1>
                    <AnimationOnScroll
                      animateIn="animate__fadeInLeft"
                      animateOnce
                      delay={3}
                    >
                      <img
                        src={StageThree}
                        alt="Stage Three"
                        className="img-fluid image-3-stage"
                      />
                    </AnimationOnScroll>
                    <div className="accordian-three">
                      <AnimationOnScroll
                        animateIn="animate__fadeInUpBig"
                        animateOnce
                        delay={3}
                      >
                        <Accordion
                          allowZeroExpanded={true}
                          allowMultipleExpanded={true}
                        >
                          <AccordionItem>
                            <AccordionItemHeading
                              style={{
                                color: "#d39564",
                              }}
                            >
                              <AccordionItemButton>
                                construction review
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>
                                Once site execution has begun, we will schedule
                                periodic site visits with you to review
                                construction progress and address any questions
                                or concerns you may have. If you prefer not to
                                visit the site, we will send you a detailed
                                weekly progress report with photographs and
                                descriptions to help you assess your progress.
                              </p>
                            </AccordionItemPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                furniture selection and manufacturing
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>
                                Individual pieces of furniture can be purchased
                                or custom made depending on design style, size
                                and budget. In the case of our custom furniture
                                offer, these pieces are manufactured in our
                                specialized partner workshops according to the
                                highest standards in the industry. In both
                                cases, all deadlines are taken into account to
                                ensure timely delivery and handover of the
                                project.
                              </p>
                            </AccordionItemPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                decor and style
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>
                                The decorating and styling phase is the
                                culmination of the project and marks the
                                culmination of the interior design process.
                                We'll offer you our expert advice in selecting
                                artwork, accessories, upholstery and rugs so you
                                can truly enjoy your dream home.
                              </p>
                            </AccordionItemPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                project completion
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>
                                Even after a satisfactory start, we will always
                                remain at your disposal for the resolution of
                                hitches, support with suppliers and periodic
                                maintenance.
                              </p>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>
                      </AnimationOnScroll>
                    </div>
                  </center>
                </div>
              </div>
              <div className="row stage-1-space">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 stage-1-space-col"></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 stage-1-space-col"></div>
              </div>
              <div className="row for-more-info-header">
                <div className="text-center">
                  <div className="for-more-info-header-content">
                    <center>
                      <hr
                        style={{
                          width: "100px",
                          border: "2.5px solid #845F42",
                          borderRadius: "15px",
                          opacity: "unset",
                        }}
                      />
                    </center>
                    <h5>FOR MORE</h5>
                  </div>
                </div>
              </div>
              <div className="row for-more-info">
                <div className="col-12 for-more-info-col text-center">
                  <div className="for-more-info-wrapper">
                    <h1>Still have questions?</h1>
                    <p>
                      Have a look at our FAQ section to find answers to the most
                      commonly asked questions
                    </p>
                    <center>
                      <Link to="/faq" className="for-more-info-button">
                        Let's go
                      </Link>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div className="how-it-works-contact-container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 how-it-works-d-wrapper how-it-works-d-wrapper-one">
                  <div className="how-it-works-contact-section-description-wrapper">
                    <div className="how-it-works-contact-image-wrapper">
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
                    <div className="how-it-works-call-us-on">
                      <h6>
                        <span>Call Us On:</span> +94 716 389 178
                      </h6>
                    </div>
                    <div className="how-it-works-dm-us-on">
                      <h6>
                        <span>DM Us On:</span> Jayamahadesignsstudio@gmail.com
                      </h6>
                    </div>
                    <div className="how-it-works-contact-descp-para">
                      Email us with any questions or inquiries or call +94 716
                      389 178. We would be happy to answer your questions
                      regarding any design work and set up meeting with you.
                      Fill out the form and let us know what you are thinking.
                      We&apos;d love to connect with you.
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 pcs-d-wrapper how-it-works-contact-section-form">
                  <div className="how-it-works-contact-section-form-wrapper">
                    <h1>Let's get connected..</h1>
                    <form onSubmit={onSubmit}>
                      <div className="how-it-works-form-input-group">
                        <FloatingLabelInput
                          id="name-input"
                          label="Name"
                          onChange={handleChange}
                          defaultValue={contactForm.name}
                          name="name"
                          required
                          type="text"
                          className="how-it-works-input-label-contact"
                        />
                      </div>
                      <div className="form-group how-it-works-form-input-group">
                        <FloatingLabelInput
                          id="email-input"
                          label="Email"
                          onChange={handleChange}
                          required
                          name="email"
                          defaultValue={contactForm.email}
                          type="email"
                          className="how-it-works-input-label-contact"
                        />
                      </div>
                      <div className="how-it-works-form-input-group">
                        <FloatingLabelInput
                          id="message-input"
                          label="Message"
                          onChange={handleChange}
                          defaultValue={contactForm.message}
                          type="text"
                          name="message"
                          required
                          className="how-it-works-input-label-contact"
                        />
                      </div>
                      <div className="how-it-works-contact-submit-button-wrap">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="primary-btn how-it-works-contact-submit align-items-end"
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

export default HowItWorks
