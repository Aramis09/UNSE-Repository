const {Service,Image,Section,ServiceOrientation} = require("../src/db")
// const { createManyImages } = require("../helpers/imageHelper")
const { checkIfExists, createNewServiceOrientation } = require("./serviceOrientationHelper")
const { createManySections } = require("./sectionsHelper")

const createNewServiceHelper = async (bodyData)=> {
  const {title,description,orientation,sections} = bodyData
  const newService = await Service.create({
    title,
    description,
    orientation
  })
  // await createManyImages(images,"setCoverImageToService",newService.dataValues.id)
  await createManySections(sections,"setServiceOwners",newService.dataValues.id) 
  // await associateServiceWithOrientation(serviceOrientation,newService)

  const data = await Service.findByPk(newService.dataValues.id,{
    include:[{model:Section, as: "SectionsViewsService"}]
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
    include:[{model:Section, as: "SectionsViewsService"}],
    limit: pageSize,
    offset: offset

  })
  return    {
    message:"The services list  get was succes",
    status: 200,
    succes:true,
    data:services 
  }
}


const getServiceDetailHelper = async(id,orientation)=> {
  let serviceFound = ""
  const includeArr = [{model:Section, as: "SectionsViewsService"}]
  if(id){
    serviceFound = await Service.findByPk(id,{
      include:includeArr
    })
  }else{
    serviceFound = await Service.findOne({
      where:{orientation},
      include:includeArr
    })
  }
  
  return {
    message:"The services was found correctly",
    status: 200,
    succes:true,
    data:serviceFound 
  }
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
  getServicesFromDbHelper,
  getServiceDetailHelper
}

