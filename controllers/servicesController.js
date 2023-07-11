const catchedAsyncErrors = require("../utils/catchedAsyncErrors")
const {createNewServiceHelper,getServicesFromDbHelper} = require ("../helpers/servicesHelper")
const {throwError} = require("../utils/classError")


const createdNewService = async (req,res) => {
  const succesProcess = await createNewServiceHelper(req.body)
  if(!succesProcess.succes)throwError()
  return res.status(200).send(succesProcess)
}

const getServices = async (req,res) => {
  const {page} = req.query
  const services = await getServicesFromDbHelper(page)
  console.log(services,"-----------------");
  if(!services.length )throwError()
  return res.status(200).send({
    data:services,
    status:200,
    succes:true,
    message: "it is all ok"
  })

}


module.exports = {
  createdNewService:catchedAsyncErrors(createdNewService),
  getServices:catchedAsyncErrors(getServices)

}

