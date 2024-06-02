const mongoose = require("mongoose")
const ProjectModel = require("../models/project.js")

// Get all the porjects
module.exports = {
  getAllProjects: async (req, res) => {
    try {
      const projects = await ProjectModel.find()
      res.json({ data: projects })
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  },

  // Get project
  getProject: async (req, res) => {
    const { id } = req.params

    try {
      const project = await ProjectModel.findById(id)

      res.status(200).json(project)
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  },

  // Get projects by search
  getProjectsBySearch: async (req, res) => {
    const { searchQuery } = req.query

    try {
      const name = new RegExp(searchQuery, "i") // Ignore the case
      const projects = await ProjectModel.find({ name })

      res.json({ data: projects })
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  },

  // Create new projects
  createNewProject: async (req, res) => {
    const project = req.body
    const newProject = new ProjectModel({ ...project })

    try {
      await newProject.save()

      res.status(201).json(newProject)
    } catch (error) {
      // Request could not be completed - 409
      res.status(409).json({ message: error.message })
    }
  },

  // Update projects
  updateProject: async (req, res) => {
    const { id } = req.params
    const { name, description, projectImage, location, projectDate } = req.body

    // Check if the project exists
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No projects with id ${id}`)

    const updatedProject = {
      name,
      description,
      projectImage,
      location,
      projectDate,
      _id: id,
    }

    await ProjectModel.findByIdAndUpdate(id, updatedProject, { new: true })

    res.json(updatedProject)
  },

  // Delete projects
  deleteProject: async (req, res) => {
    const { id } = req.params

    // Check if the project exists
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No projects with id ${id}`)

    await ProjectModel.findByIdAndRemove(id)

    res.json({ message: "Project deletion successfull" })
  },
}
