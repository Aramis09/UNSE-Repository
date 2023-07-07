const {Service,Image,ServiceOrientation} = require("../src/db")
const { createManyImages } = require("../helpers/imageHelper")
const { checkIfExists, createNewServiceOrientation } = require("./serviceOrientationHelper")

const createNewServiceHelper = async (bodyData)=> {
  const {title,description,images,serviceOrientation} = bodyData
  const newService = await Service.create({
    title,
    description
  })
   await createManyImages(images,"setCoverImageToService",newService.dataValues.id)
   await associateServiceWithOrientation(serviceOrientation,newService)

  const data = await Service.findOne({
    where:{id:newService.dataValues.id},
    include:[{model:ServiceOrientation, as: "Oritentation"},
  {model:Image, as: "CoverImageToService"}]

  })
  return {
    message:"New Service was created",
    status: 200,
    succes:true,
    data 
  }
}
const getServicesFromDbHelper = async (page)=> {
  let pageSize = 4; // cantidad de elementos por página
  let offset = (page - 1) * pageSize;
  const services = await Service.findAll({
    include:[{model:ServiceOrientation, as: "Oritentation"},
      {model:Image, as: "CoverImageToService"}],
    limit: pageSize,
    offset: offset

  })
  return services 
}

//todo //////////////////////////Logic//////////////////////////////////
const associateServiceWithOrientation =async (serviceOrientation,newService )=> {
  const orientation = await checkIfExists(serviceOrientation)
  if(!orientation) {
    const newServiceOrientation =  await createNewServiceOrientation(serviceOrientation)
    await newServiceOrientation.addOritentation(newService,{
      through:{model:"Service_ServiceOrientation", as: "Oritentation"}
    })
    return true
  }
  await orientation.addOritentation(newService,{
    through:{model:"Service_ServiceOrientation", as: "Oritentation"}
  })
  return true
}

module.exports = {
  createNewServiceHelper,
  getServicesFromDbHelper
}

