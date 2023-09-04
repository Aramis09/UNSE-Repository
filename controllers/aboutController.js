const catchedAsyncErrors = require("../utils/catchedAsyncErrors")
const { getAboutHelper,createAboutHelper,editAboutHelper } = require("../helpers/aboutHelper")

const getAbout =async (req,res) => {
  const aboutData = await getAboutHelper()
  if(!aboutData.succes )throwError()
  return res.status(200).send(aboutData)
}

const createAbout =async (req,res) => {
  const newAbout = await createAboutHelper(req.body)
  if(!newAbout.succes )throwError()
  return res.status(200).send(newAbout)
}

const editAbout =async (req,res) => {
  const newAbout = await editAboutHelper(req.body)
  if(!newAbout.succes )throwError()
  return res.status(200).send(newAbout)
}


module.exports = {
  getAbout:catchedAsyncErrors(getAbout),
  createAbout:catchedAsyncErrors(createAbout),
  editAbout:catchedAsyncErrors(editAbout),  
}