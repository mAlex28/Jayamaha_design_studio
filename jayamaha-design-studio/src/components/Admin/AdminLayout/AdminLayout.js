import React, { useEffect, useState } from "react"
import decode from "jwt-decode"
import { useNavigate, useLocation } from "react-router-dom"
import { Row, Card, Col } from "react-bootstrap"

import Sidebar from "../Sidebar/Sidebar"
import Header from "./Header"
import Footer from "./Footer"
import Projects from "../Pages/Projects"

const AdminLayout = ({ type }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("jdsprofile"))
  )
  const [collapsed, setCollapsed] = useState(true)
  const [toggled, setToggled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const logout = () => {
    navigate("/admin", { replace: true })
    setUser(null)
    localStorage.clear()
  }

  useEffect(() => {
    const token = user?.token

    if (token) {
      const decodedToken = decode(token)

      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    setUser(JSON.parse(localStorage.getItem("jdsprofile")))
  }, [location])

  const handleToggleSidebar = (value) => setToggled(value)

  const handleCollapsedChange = (value) => setCollapsed(value)

  return (
    <div className="app">
      {!user ? (
        <div className="container">
          <Row className="justify-content-center">
            <Col className="">
              <Card style={{ width: "18rem", marginTop: "50px" }}>
                <Card.Body>
                  <Card.Title>Permission Denied</Card.Title>
                  <Card.Text>
                    You do not have permission to view this page.
                  </Card.Text>
                  <Card.Link href="/home">Home</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        <>
          <Sidebar
            collapse={collapsed}
            toggled={toggled}
            handleToggleSidebar={handleToggleSidebar}
          />
          <main>
            <Header
              toggled={toggled}
              collapsed={collapsed}
              handleToggleSidebar={handleToggleSidebar}
              handleCollapsedChange={handleCollapsedChange}
              logout={logout}
              user={user}
            />
            <div
              style={{
                margin: "2em 0",
              }}
            >
              <Projects />
            </div>
            <Footer />
          </main>
        </>
      )}
    </div>
  )
}

export default AdminLayout
