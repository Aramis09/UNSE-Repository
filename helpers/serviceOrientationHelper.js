const {ServiceOrientation} = require("../src/db")

const checkIfExistsOrientation = async(orientationName)=> {
  const serviceOrientation= await ServiceOrientation.findAll({
    where:{
      title:orientationName
    }
  })
  if(serviceOrientation.length) return serviceOrientation[0]
  return false
}

const createNewServiceOrientation = async (orientationName) => {
  const newServiceOrientation = await ServiceOrientation.create({title:orientationName})
  return newServiceOrientation
}

module.exports = {
  checkIfExistsOrientation,
  createNewServiceOrientation
}