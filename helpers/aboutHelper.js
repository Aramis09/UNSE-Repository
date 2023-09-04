
const { About } = require("../src/db")

//!Solo trabajaremos con el primero
const getAboutHelper = async ()=> {
  const about = await About.findByPk(1)
  return {
    message:"Ever return 'about' with id = 1",
    status: 200,
    succes:true,
    data:about 
  }
}

const createAboutHelper = async (bodyData) => {
  const newAbout = await About.create(bodyData)
  return {
    message:"Remember, only create one about",
    status: 200,
    succes:true,
    data:newAbout 
  }
}

const editAboutHelper = async (bodyData) => {
  const { property,newValue } = bodyData;
  const aboutForEdit = await About.findByPk(1)
  aboutForEdit[property] = newValue
  await aboutForEdit.save()
  return {
    message:"remenber, only works with 'about -> id = 1'",
    status: 200,
    succes:true,
    data: aboutForEdit
  }
}
module.exports = {
  getAboutHelper,
  createAboutHelper,
  editAboutHelper
}