const catchedAsyncErrors = require("../utils/catchedAsyncErrors")
const { createCarrouselHelper, getCarrouselDetailHelper, editCarrouselHelper } = require("../helpers/carrouselHelper")
const { throwError } = require("../utils/classError")


const createCarrousel = async(req,res) => {
  const newCarrousel = await createCarrouselHelper(req.body)
  if(!newCarrousel.succes) throwError()
  return res.status(200).send(newCarrousel)
}

const getCarrouselDetail = async(req,res) => {
  const carrouselFound = await getCarrouselDetailHelper(req.query)
  if(!carrouselFound.succes) throwError()
  return res.status(200).send(carrouselFound)
} 

const editCarrousel = async(req,res) => {
  const carrouselEdited = await editCarrouselHelper(req.body)
  if(!carrouselEdited.succes) throwError()
  return res.status(200).send(carrouselEdited)
} 

module.exports = {
  createCarrousel: catchedAsyncErrors(createCarrousel),
  getCarrouselDetail: catchedAsyncErrors(getCarrouselDetail),
  editCarrousel:catchedAsyncErrors(editCarrousel)
}

