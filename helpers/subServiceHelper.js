const { SubService,Service,Section } = require("../src/db")
const { createManySections } = require("./sectionsHelper")

const createSubServiceHelper = async (bodyData)=> {
  const {title,resume,description, idService,sections} = bodyData
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
  const { page, size } = queryData 
  let pageSize = size || 6; // cantidad de elementos por página
  let offset = (page - 1) * pageSize;
  const subServiceList = await SubService.findAll({
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