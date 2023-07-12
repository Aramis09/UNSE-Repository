const catchedAsyncErrors = require("../utils/catchedAsyncErrors")
const {createNewServiceHelper,getServicesFromDbHelper,getServiceDetailHelper} = require ("../helpers/servicesHelper")
const {throwError} = require("../utils/classError")


const createdNewService = async (req,res) => {
  const succesProcess = await createNewServiceHelper(req.body)
  if(!succesProcess.succes)throwError()
  return res.status(200).send(succesProcess)
}

const getServices = async (req,res) => {
  const {page} = req.query
  const services = await getServicesFromDbHelper(page)
  if(!services.succes )throwError()
  return res.status(200).send(services)
}

const getDetailService = async (req,res) => {
  const {id} = req.params
  const service = await getServiceDetailHelper(id)
  if(!service.succes )throwError()
  return res.status(200).send(service)
}


module.exports = {
  createdNewService:catchedAsyncErrors(createdNewService),
  getServices:catchedAsyncErrors(getServices),
  getDetailService:catchedAsyncErrors(getDetailService)

}

