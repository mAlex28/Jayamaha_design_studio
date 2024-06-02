const mongoose = require("mongoose")

const adminSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    id: { type: String },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Admin", adminSchema)
