const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth.js")

const projectController = require("../controller/projects.js")

module.exports = router.get("/", projectController.getAllProjects)
module.exports = router.get("/:id", projectController.getProject)
module.exports = router.get("/search", projectController.getProjectsBySearch)
module.exports = router.post("/", auth, projectController.createNewProject)
module.exports = router.patch("/:id", auth, projectController.updateProject)
module.exports = router.delete("/:id", auth, projectController.deleteProject)
