const {ServiceOrientation} = require("../src/db")

const checkIfExists = async(titleForSearch)=> {
  const serviceOrientation= await ServiceOrientation.findAll({
    where:{
      title:titleForSearch
    }
  })
  if(serviceOrientation.length) return serviceOrientation[0]
  return false
}

const createNewServiceOrientation = async (titleForSearch)=> {
  const newServiceOrientation = await ServiceOrientation.create({title:titleForSearch})
  return newServiceOrientation
}

module.exports = {
  checkIfExists,
  createNewServiceOrientation
}