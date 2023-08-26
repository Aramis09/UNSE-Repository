const {ServiceOrientation} = require("../src/db")

const checkIfExistsOrientation= async(orientationName)=> {
  const serviceOrientation= await ServiceOrientation.findAll({
    where:{
      name:orientationName
    }
  })
  if(serviceOrientation.length) return serviceOrientation[0]
  return false
}

const createNewServiceOrientation = async (orientationName) => {
  const newServiceOrientation = await ServiceOrientation.create({name:orientationName})
  return newServiceOrientation
}

const deleteServiceOrientation = async (id) =>{
  await ServiceOrientation.destroy({
    where:{
      id
    }
  })
}

module.exports = {
  checkIfExistsOrientation,
  createNewServiceOrientation,
  deleteServiceOrientation
}