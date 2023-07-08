const { SubService,Service } = require("../src/db")

const createSubService = async (bodyData)=> {
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

module.exports = createSubService