import React, { useState } from "react"
import FloatingLabelInput from "react-floating-label-input"
import { useFormspark } from "@formspark/use-formspark"

import SubmitIcon from "../../assets/icons/submit.png"
import "./Contact.css"

const FORMSPARK_FORM_ID = "Cujtk5Ys"

const initialValues = {
  name: "",
  email: "",
  message: "",
}

const Contact = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  })

  const [contactForm, setContactForm] = useState(initialValues)

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
    <section className="contact-section">
      <div className="container pt-5 pb-5 contact-section-container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="contact-section-description-wrapper">
              <div className="call-us-on">
                <h6>
                  <span>Call Us On:</span> +94 716 389 178
                </h6>
              </div>
              <div className="dm-us-on">
                <h6>
                  <span>DM Us On:</span> Jayamahadesignsstudio@gmail.com
                </h6>
              </div>
              <div className="contact-descp-para">
                Email us with any questions or inquiries or call +94 716 389
                178. We would be happy to answer your questions regarding any
                design work and set up meeting with you. Fill out the form and
                let us know what you are thinking. We&apos;d love to connect
                with you.
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 contact-section-form">
            <div className="contact-section-form-wrapper">
              <h1>Let's get connected..</h1>
              <form onSubmit={onSubmit}>
                <div className="form-input-group">
                  <FloatingLabelInput
                    id="name-input"
                    label="Name"
                    onChange={handleChange}
                    defaultValue={contactForm.name}
                    name="name"
                    required
                    type="text"
                    className="input-label-contact"
                  />
                </div>
                <div className="form-group form-input-group">
                  <FloatingLabelInput
                    id="email-input"
                    label="Email"
                    onChange={handleChange}
                    required
                    name="email"
                    defaultValue={contactForm.email}
                    type="email"
                    className="input-label-contact"
                  />
                </div>
                <div className="form-input-group">
                  <FloatingLabelInput
                    id="message-input"
                    label="Message"
                    onChange={handleChange}
                    defaultValue={contactForm.message}
                    type="text"
                    name="message"
                    required
                    className="input-label-contact"
                  />
                </div>
                <div className="contact-submit-button-wrap">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="primary-btn contact-submit align-items-end"
                  >
                    <img src={SubmitIcon} alt="contact form submit icon" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
