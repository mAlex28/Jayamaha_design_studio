const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const AdminModel = require("../models/admin.js")

const secret = "hybomophip"

module.exports = {
  // Get all admins
  getAllAdmins: async (req, res) => {
    try {
      const allAdmins = await AdminModel.find()
      res.json({ data: allAdmins })
    } catch (error) {
      console.log(error)
      res.status(404).json({ message: "Something went wrong" })
    }
  },

  // Login to a existing admin
  signin: async (req, res) => {
    const { email, password } = req.body

    try {
      // Find if the user exists
      const checkExistingUser = await AdminModel.findOne({ email })
      if (!checkExistingUser)
        return res.status(404).json({ message: "User does not exist" })

      // Check the passwords
      const isPasswordCorrect = await bcrypt.compare(
        password,
        checkExistingUser.password
      )
      if (!isPasswordCorrect)
        return res.status(404).json({ message: "Invalid credentials" })

      // Create the jwd token
      // Token expires in 5 hours
      const token = jwt.sign(
        { email: checkExistingUser.email, id: checkExistingUser._id },
        secret,
        {
          expiresIn: "5h",
        }
      )

      res.status(200).json({ result: checkExistingUser, token })
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" })
    }
  },

  // Create a new admin
  createNewAdmin: async (req, res) => {
    const { email, password, name } = req.body

    try {
      // Find if the user exists
      const checkExistingUser = await AdminModel.findOne({ email })
      if (checkExistingUser)
        return res.status(400).json({ message: "User already exists" })

      // Hash the passwords
      const hashedPassword = await bcrypt.hash(password, 12)

      const result = await AdminModel.create({
        email,
        password: hashedPassword,
        name,
      })

      res.status(201).json({ result })
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" })
    }
  },

  // Update admin
  updateAdmin: async (req, res) => {
    const { id } = req.params
    const { name, email, password } = req.body

    // Check if the project exists
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No admins with id ${id}`)

    const updatedAdmin = { name, email, password, _id: id }

    await AdminModel.findByIdAndUpdate(id, updatedAdmin, { new: true })

    res.json(updatedAdmin)
  },
}
