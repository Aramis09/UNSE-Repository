const DropError = require("../utils/classError")
const catchedAsyncErrors = require("../utils/catchedAsyncErrors")
const {createNewAdvertisingHelper} = require("../helpers/advertisingHelper")


const createdNewAdversiting = async (req,res) => {
    const succesProcess = await createNewAdvertisingHelper (req.body)
    if(!succesProcess )throw new DropError({
      message:"Error from server, please try again later",
      status: 500,
      succes:false,
      typeError:"Server error"
    })
    return res.status(200).send(succesProcess)
  }

const getAdversiting = async (req,res)=> {
  const {page } = req.query
  const adversitingPage = await getAdversitingHelper({page}) 
}

module.exports = {
  createdNewAdversiting: catchedAsyncErrors(createdNewAdversiting),
  getAdversiting: catchedAsyncErrors(getAdversiting)
}