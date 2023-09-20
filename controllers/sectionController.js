const { editSectionHelper,createSectionHelper,deleteSectionHelper } = require("../helpers/sectionsHelper")
const catchedAsyncErrors = require("../utils/catchedAsyncErrors")


const editSection = async (req,res) => {
  const succesProcess = await editSectionHelper(req.body)
  if(!succesProcess.succes )throwError()
  return res.status(200).send(succesProcess)
}

const createSection = async (req,res) => {
  const succesProcess = await createSectionHelper(req.body)
  if(!succesProcess.succes )throwError()
  return res.status(200).send(succesProcess)
}

const deleteSection = async (req,res) => {
  const succesProcess = await deleteSectionHelper(req.params)
  if(!succesProcess.succes )throwError()
  return res.status(200).send(succesProcess)
}


module.exports = {
  editSection : catchedAsyncErrors(editSection),
  createSection : catchedAsyncErrors(createSection),
  deleteSection : catchedAsyncErrors(deleteSection),
}