const catchedAsyncErrors = require("../utils/catchedAsyncErrors")
const {createNewServiceHelper} = require ("../helpers/servicesHelper")
const {throwError} = require("../utils/classError")
const createdNewService = async (req,res) => {
  const succesProcess = await createNewServiceHelper(req.body)
  if(!succesProcess )throwError()
  return res.status(200).send(succesProcess)
}

module.exports = {
  createdNewService:catchedAsyncErrors(createdNewService)
}

