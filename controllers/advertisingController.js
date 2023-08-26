const { throwError } = require("../utils/classError")
const catchedAsyncErrors = require("../utils/catchedAsyncErrors")
const {createNewAdvertisingHelper,getAdversitingHelper, getDetailAdvertisingHelper,editAdvertisingHelper,deleteAdvertisingHelper} = require("../helpers/advertisingHelper")


const createdNewAdversiting = async (req,res) => {
    const succesProcess = await createNewAdvertisingHelper (req.body)
    if(!succesProcess.succes )throwError()
    return res.status(200).send(succesProcess)
}
const editAdvertising = async (req,res) => {
  const succesProcess = await editAdvertisingHelper(req.body)
  if(!succesProcess.succes )throwError()
  return res.status(200).send(succesProcess)
}

const getAdversiting = async (req,res)=> {
  const { page } = req.query
  const adversitingPage = await getAdversitingHelper(page) 
  if(!adversitingPage.succes) throwError()
  return res.status(200).send(adversitingPage)
}

const getDetailAdvertise = async (req, res) => {
  const {id} = req.params
  const advertise = await getDetailAdvertisingHelper(id)
  if (!advertise.succes) throwError()
  return res.status(200).send(advertise)
}


const deleteAdvertising = async (req,res) => {
  const succesProcess = await deleteAdvertisingHelper (req.params)
  if(!succesProcess.succes )throwError()
  return res.status(200).send(succesProcess)
}
module.exports = {
  createdNewAdversiting: catchedAsyncErrors(createdNewAdversiting),
  getAdversiting: catchedAsyncErrors(getAdversiting),
  getDetailAdvertise: catchedAsyncErrors(getDetailAdvertise),
  editAdvertising: catchedAsyncErrors(editAdvertising),
  deleteAdvertising:catchedAsyncErrors(deleteAdvertising)
}