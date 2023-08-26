const catchedAsyncErrors = require("../utils/catchedAsyncErrors")
const { ServiceOrientation } = require("../src/db")

const getOrientations = async (req,res) => {
  const orientations = await ServiceOrientation.findAll()
  return res.status(200).send(orientations)
}

module.exports = {
  getOrientations:catchedAsyncErrors(getOrientations)
}