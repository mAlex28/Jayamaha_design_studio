const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")

require("dotenv").config()

const adminRoutes = require("./routes/admin.js")
const projectRoutes = require("./routes/project.js")

app.use(cors())
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))

app.use("/admin", adminRoutes)
app.use("/projects", projectRoutes)

const PORT = process.env.PORT | 5000

app.get("/", function (req, res) {
  res.send("API is working")
})

mongoose
  .connect(
    "mongodb+srv://jdsdatabase:mnjRhcVBxMwEr8ok@cluster0.yy7mia9.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server Running Successfully`)
    })
  )
  .catch((error) => console.log(`${error} did not connect`))
