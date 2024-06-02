import { Fragment } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Login from "./components/Admin/Login/Login"
import AdminLayout from "./components/Admin/AdminLayout/AdminLayout"

const RoutesWithoutNav = () => {
  const user = JSON.parse(localStorage.getItem("jdsprofile"))

  return (
    <Fragment>
      <Routes>
        <Route
          index
          element={user ? <Navigate replace to="/dashboard" /> : <Login />}
        />
        <Route path="/dashboard" element={<AdminLayout type="projects" />} />
      </Routes>
    </Fragment>
  )
}

export default RoutesWithoutNav
