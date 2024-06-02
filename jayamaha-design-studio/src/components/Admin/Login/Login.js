import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Alert from "react-bootstrap/Alert"
import { useNavigate } from "react-router-dom"

import "./login.css"
import { signin } from "../../../api"

const initialLoginData = {
  email: "",
  password: "",
}

const Login = () => {
  const [form, setForm] = useState(initialLoginData)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()

  const handleShowPassword = () => setShowPassword(!showPassword)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await signin(form)
      localStorage.setItem("jdsprofile", JSON.stringify({ ...res.data }))
      navigate("/dashboard", { replace: true })
    } catch (err) {
      setError(true)
      setErrorMessage(err.response.data.message)
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-inner">
          <h3>Admin Sign In</h3>
          <Row>
            {error && <Alert variant="danger">{errorMessage}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="form-control"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="form-control"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  name="showpasswordcheck"
                  label="Show password"
                  onChange={handleShowPassword}
                  id="showpasswordcheck"
                />
              </Form.Group>
              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Login
