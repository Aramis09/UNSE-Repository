const createSubService = require("../helpers/subServiceHelper")


const createNewSubService = async(req,res) => {
  const newSubService = await createSubService(req.body)
  res.status(200).send(newSubService)
}


module.exports = {
  createNewSubService
}

