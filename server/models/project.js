const mongoose = require("mongoose")

const projectSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    projectImage: [String],
    location: String,
    projectDate: Date,
  },
  { timestamps: true }
)

module.exports = mongoose.model("Project", projectSchema)
