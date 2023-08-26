const { SubService,Service,Section } = require("../src/db")
const { createManySections } = require("./sectionsHelper")
const {deleteCloudImageHelper} = require("./helperCloudImage")
const createSubServiceHelper = async (bodyData)=> {
  const {title,resume,description, orientation,sections} = bodyData
  const idService = await(await Service.findOne({where:{orientation}})).dataValues.id
  const newSubService = await SubService.create({
    title,
    resume,
    description,
    setTheBelongToService:idService
  })

  await createManySections(sections,"setSubServiceOwner",newSubService.dataValues.id) 

  const data = await SubService.findByPk(newSubService.dataValues.id,{
    include:[{model:Service, as:"BelongToTheService"},
      {model:Section, as:"SectionsViewsSubServ"}]
  })
  return {
    message:"New SubService was created",
    status: 200,
    succes:true,
    data 
  }
}

const getSubServiceHelper = async (queryData) => {
  const { page,orientation,size } = queryData 
  const service = await Service.findOne({
    where:{
      orientation
  }})
  let pageSize = size || 6;  // cantidad de elementos por página

  let offset = (page - 1) * pageSize;
  const subServiceList = await SubService.findAll({
    where: { setTheBelongToService: service.dataValues.id},
    include:[{model:Service, as:"BelongToTheService"},
      {model:Section, as:"SectionsViewsSubServ"}],
    limit: pageSize,
    offset: offset,
    order: [['createdAt', 'DESC']]
  })

  return {
    data:!subServiceList.length? null : subServiceList,
    status:200,
    succes:true,
    message: "it is all ok"
  }
}

const getSubServiceDetailHelper = async (id) => {
  const subServiceFound = await SubService.findByPk(id,{
    include:[{model:Service, as:"BelongToTheService"},
      {model:Section, as:"SectionsViewsSubServ"}
  ]
  })
  return {
    data:subServiceFound,
    status:200,
    succes:true,
    message: "it is all ok"
  }
}
const editSubServiceHelper = async (bodyData) => {
  const {  id,property,newValue } = bodyData;
  const subServiceForEdit = await SubService.findByPk(id)
  subServiceForEdit[property] = newValue
  await subServiceForEdit.save()
  return {
    message:"subService successfuly edited",
    status: 200,
    succes:true,
    data: subServiceForEdit
  }
}

const deletesubServiceHelper = async (params) => {
  const {id} = params
  const subServiceForDelete = await SubService.findByPk(id,{
    include:[{model:Section, as:"SectionsViewsSubServ"}]
  }) 
  if(!subServiceForDelete) return {
    message:"subService dont exist",
    status: 200,
    succes:true,
  }
  if(subServiceForDelete["SectionsViewsSubServ"] && subServiceForDelete.SectionsViewsSubServ.length){
    await subServiceForDelete.SectionsViewsSubServ.map(async objSection => {
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
  await SubService.destroy({
    where:{
      id
    }
  })
  return {
    message:"subService successfuly deleted",
    status: 200,
    succes:true,
  }
}
module.exports = {
  createSubServiceHelper,
  getSubServiceHelper,
  getSubServiceDetailHelper,
  editSubServiceHelper,
  editSubServiceHelper,
  deletesubServiceHelper
}