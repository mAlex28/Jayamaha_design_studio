const jwt = require("jsonwebtoken")

const secret = "hybomophip"

module.exports = auth = async (req, res, next) => {
  try {
    // Split the token from token name
    const token = req.headers.authorization.split(" ")[1]

    let decodedData

    decodedData = jwt.decode(token, secret)
    req.userId = decodedData?.id

    next()
  } catch (error) {
    console.log(error)
  }
}
