const {Service,Section,ServiceOrientation} = require("../src/db")
// const { createManyImages } = require("../helpers/imageHelper")
const { checkIfExistsOrientation, createNewServiceOrientation, deleteServiceOrientation } = require("./serviceOrientationHelper")
const { createManySections } = require("./sectionsHelper")
const {deleteCloudImageHelper} = require("./helperCloudImage")
const createNewServiceHelper = async (bodyData)=> {
  const {title,description,orientation,sections} = bodyData

  const newService = await Service.create({
    title,
    description,
    orientation
  })
  await createManySections(sections,"setServiceOwners",newService.dataValues.id) 
  await associateServiceWithOrientation(orientation,newService)

  const data = await Service.findByPk(newService.dataValues.id,{
    include:[{model:Section, as: "SectionsViewsService"},{model:ServiceOrientation, as:"Orientation"}]
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
  console.log(serviceFound);
  return {
    message:"The services was found correctly",
    status: 200,
    succes:true,
    data:serviceFound 
  }
}


//todo //////////////////////////Logic//////////////////////////////////
const associateServiceWithOrientation =async (serviceOrientation,newService )=> {
  const orientation = await checkIfExistsOrientation(serviceOrientation)
  if(!orientation) {
    const newServiceOrientation =  await createNewServiceOrientation(serviceOrientation)
    await newServiceOrientation.addOrientation(newService,{
      through:{model:"Service_ServiceOrientation", as: "Orientation"}
    })
    return true
  }
  await orientation.addOrientation(newService,{ //!Esto no deberia de crearse
    through:{model:"Service_ServiceOrientation", as: "Orientation"}
  })
  return true
}


const editServiceHelper = async (bodyData) => {
  const {  id,property,newValue } = bodyData;
  const serviceForEdit = await Service.findByPk(id)
  serviceForEdit[property] = newValue
  await serviceForEdit.save()
  return {
    message:"service successfuly edited",
    status: 200,
    succes:true,
    data: serviceForEdit
  }
}

const deleteServiceHelper = async (params) => {
  const {id} = params
  const serviceForDelete = await Service.findByPk(id,{
    include:[{model:Section, as:"SectionsViewsService"},{model:ServiceOrientation, as:"Orientation"}]
  }) 
  if(!serviceForDelete) return {
    message:"service dont exist",
    status: 200,
    succes:true,
  }
  if(serviceForDelete.SectionsViewsService.length){
    await serviceForDelete.SectionsViewsService.map(async objSection => {
     await deleteCloudImageHelper({publicId:objSection.topImage})
     await deleteCloudImageHelper({publicId:objSection.middleImage})
     await deleteCloudImageHelper({publicId:objSection.belowImage})
     if(objSection.id){
      await Section.destroy({
        where:{
          id:objSection.id
        }
      })
    }
    })
  }
  if(serviceForDelete.Orientation.length){
    await deleteServiceOrientation(serviceForDelete.Orientation[0].id)
  } 

  await Service.destroy({
    where:{
      id
    }
  })
  return {
    message:"service successfuly edited",
    status: 200,
    succes:true,
    
  }
}
module.exports = {
  createNewServiceHelper,
  getServicesFromDbHelper,
  getServiceDetailHelper,
  editServiceHelper,
  deleteServiceHelper
}

