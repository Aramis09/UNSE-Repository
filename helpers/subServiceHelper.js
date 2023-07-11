const { SubService,Service } = require("../src/db")

const createSubServiceHelper = async (bodyData)=> {
  const {title,resume,description, idService} = bodyData
  const newSubService = await SubService.create({
    title,
    resume,
    description,
    setTheBelongToService:idService
  })
  const data = await SubService.findOne({
    where: {id:newSubService.dataValues.id},
    include:[{model:Service, as:"BelongToTheService"}]
  })
  return {
    message:"New SubService was created",
    status: 200,
    succes:true,
    data 
  }
}

const getSubServiceHelper = async (queryData) => {
  const { page } = queryData 
  let pageSize = 4; // cantidad de elementos por página
  let offset = (page - 1) * pageSize;
  const subServiceList = await SubService.findAll({
    include:[{model:Service, as:"BelongToTheService"}],
    limit: pageSize,
    offset: offset
  })
  return subServiceList
}

module.exports = {
  createSubServiceHelper,
  getSubServiceHelper
}