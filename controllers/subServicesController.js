const {createSubServiceHelper,getSubServiceHelper} = require("../helpers/subServiceHelper")
const catchedAsyncErrors = require("../utils/catchedAsyncErrors")


const createNewSubService = async(req,res) => {
  const newSubService = await createSubServiceHelper(req.body)
  res.status(200).send(newSubService)
}

const getSubService = async(req,res) => {
  const list = await getSubServiceHelper(req.query)
  res.status(200).send({
    data:list,
    status:200,
    succes:true,
    message: "it is all ok"
  })
}

module.exports = {
  createNewSubService : catchedAsyncErrors(createNewSubService),
  getSubService: catchedAsyncErrors(getSubService)
}

