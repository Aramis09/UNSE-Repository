const { SubService,Service,Section } = require("../src/db")
const { createManySections } = require("./sectionsHelper")

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
  const { page,orientation } = queryData 
  const service = await Service.findOne({
    where:{
      orientation
  }})
  let pageSize = 6; // cantidad de elementos por página
  let offset = (page - 1) * pageSize;
  const subServiceList = await SubService.findAll({
    where: { setTheBelongToService: service.dataValues.id},
    include:[{model:Service, as:"BelongToTheService"},
      {model:Section, as:"SectionsViewsSubServ"}],
    limit: pageSize,
    offset: offset
  })
  return {
    data:subServiceList,
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

module.exports = {
  createSubServiceHelper,
  getSubServiceHelper,
  getSubServiceDetailHelper
}