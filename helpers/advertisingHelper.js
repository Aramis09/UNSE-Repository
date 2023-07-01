const {Advertising,Image} = require("../src/db")


const createNewAdvertisingHelper = async (bodyData)=> {
  const { title,description,summary,aside,footer,image } = bodyData
  const newAdvertising = await Advertising.create({ title, description, summary, aside, footer });
  await Image.create({ url: image,advertisingId:newAdvertising.dataValues.id });
  return {
    message:"New Adversiting was created",
    status: 200,
    succes:true,
    typeError:"none"
  }
}
const getAdversitingHelper = async ({page})=> {
  Advertising
} 


module.exports = {
  createNewAdvertisingHelper
}