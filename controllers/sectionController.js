const { editSectionHelper } = require("../helpers/sectionsHelper")
const catchedAsyncErrors = require("../utils/catchedAsyncErrors")


const editSection = async (req,res) => {
  const succesProcess = await editSectionHelper(req.body)
  if(!succesProcess.succes )throwError()
  return res.status(200).send(succesProcess)
}
module.exports = {
  editSection : catchedAsyncErrors(editSection)
}