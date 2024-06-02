const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth.js")

const adminControllers = require("../controller/admin.js")

module.exports = router.get("/", adminControllers.getAllAdmins)
module.exports = router.post("/signin", adminControllers.signin)
module.exports = router.post(
  "/new-admin",
  auth,
  adminControllers.createNewAdmin
)
module.exports = router.patch("/:id", auth, adminControllers.updateAdmin)
