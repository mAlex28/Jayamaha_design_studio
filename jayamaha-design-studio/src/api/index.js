import axios from "axios"

// http://localhost:5000
// https://jdsbackend.jayamahadesignstudio.lk/
const API = axios.create({
  baseURL: "https://jdsbackend.jayamahadesignstudio.lk/",
})

API.interceptors.request.use((req) => {
  if (localStorage.getItem("jdsprofile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("jdsprofile")).token
    }`
  }

  return req
})

// project related HTTP requests
export const fetchProjects = () => API.get("/projects")
export const fetchProject = (id) => API.get(`/projects/${id}`)
export const searchProject = (searchQuery) =>
  API.get(`/projects/search?searchQuery=${searchQuery}`)
export const createProject = (newProject) => API.post("/projects", newProject)
export const updateProjects = (id, updatedProject) =>
  API.patch(`/projects/${id}`, updatedProject)
export const deleteProjects = (id) => API.delete(`/projects/${id}`)

// admin related HTTP requests
export const signin = (formData) => API.post("/admin/signin", formData)
export const createAdmin = (formData) => API.post("/admin/new-admin", formData)
export const getAdmins = () => API.get("/admin")
export const updateAdmin = (id, updatedAdmin) =>
  API.patch(`/admin/${id}`, updatedAdmin)
