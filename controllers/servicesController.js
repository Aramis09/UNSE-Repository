const catchedAsyncErrors = require("../utils/catchedAsyncErrors")
const {createNewServiceHelper,getServicesFromDbHelper,getServiceDetailHelper,editServiceHelper, deleteServiceHelper} = require ("../helpers/servicesHelper")
const {throwError} = require("../utils/classError")
const { checkIfExistsOrientation } = require("../helpers/serviceOrientationHelper")


const createdNewService = async (req,res) => {
  const succesProcess = await createNewServiceHelper(req.body)
  if(!succesProcess.succes)throwError()
  return res.status(200).send(succesProcess)
}
const editService = async (req,res) => {
  const succesProcess = await editServiceHelper(req.body)
  if(!succesProcess.succes )throwError()
  return res.status(200).send(succesProcess)
}
const getServices = async (req,res) => {
  const {page} = req.query
  const services = await getServicesFromDbHelper(page)
  if(!services.succes )throwError()
  return res.status(200).send(services)
}

const getDetailService = async (req,res) => {
  const {orientation,id} = req.query
  const service = await getServiceDetailHelper(id,orientation)
  if(!service.succes )throwError()
  return res.status(200).send(service)
}
const deleteService = async(req,res) => {
  const succesProcess = await deleteServiceHelper(req.params)
  if(!succesProcess.succes) throwError()
  res.status(200).send(succesProcess)
}

module.exports = {
  createdNewService:catchedAsyncErrors(createdNewService),
  getServices:catchedAsyncErrors(getServices),
  getDetailService:catchedAsyncErrors(getDetailService),
  editService:catchedAsyncErrors(editService),
  deleteService:catchedAsyncErrors(deleteService)
}

