const {createSubServiceHelper,getSubServiceHelper, getSubServiceDetailHelper} = require("../helpers/subServiceHelper")
const catchedAsyncErrors = require("../utils/catchedAsyncErrors")
const { throwError } = require("../utils/classError")


const createNewSubService = async(req,res) => {
  const newSubService = await createSubServiceHelper(req.body)
  if(!newSubService.succes) throwError()
  res.status(200).send(newSubService)
}

const getSubService = async(req,res) => {
  const list = await getSubServiceHelper(req.query)
  if(!list.succes) throwError()
  res.status(200).send(list)
}

const getDetailSubService = async(req,res) => {
  const {id} = req.params
  const subServiceFound = await getSubServiceDetailHelper(id)
  if(!subServiceFound.succes)throwError()
  return res.status(200).send(subServiceFound)
}

module.exports = {
  createNewSubService : catchedAsyncErrors(createNewSubService),
  getSubService: catchedAsyncErrors(getSubService),
  getDetailSubService:catchedAsyncErrors(getDetailSubService)
}

