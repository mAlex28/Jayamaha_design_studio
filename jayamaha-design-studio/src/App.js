import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom"
import { useLayoutEffect } from "react"

import Login from "./components/Admin/Login/Login"
import AdminLayout from "./components/Admin/AdminLayout/AdminLayout"
import Contact from "./components/Pages/Contact/Contact"
import Portfolio from "./components/Pages/Portfolio/Portfolio"
import Home from "./components/Pages/Home/Home"
import FAQ from "./components/Pages/FAQ/FAQ"
import AboutUs from "./components/Pages/AboutUs/AboutUs"
import Services from "./components/Pages/Services/Services"
import HowItWorks from "./components/Pages/HowItWorks/HowItWorks"

import "./scss/App.scss"

const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [location.pathname])
  return children
}

const App = () => {
  const user = JSON.parse(localStorage.getItem("jdsprofile"))

  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin"
            element={user ? <Navigate replace to="/dashboard" /> : <Login />}
          />
          <Route path="/dashboard" element={<AdminLayout type="projects" />} />
        </Routes>
      </Wrapper>
    </Router>
  )
}

export default App
