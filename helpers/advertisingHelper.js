const {Advertising,Section} = require("../src/db");
const { deleteCloudImageHelper } = require("./helperCloudImage");
const { createManySections } = require("./sectionsHelper");


const createNewAdvertisingHelper = async (bodyData)=> {
  const { title,summary,aside,image,
  footer,sections } = bodyData
  const newAdvertising = await Advertising.create({ 
    title, 
    image,
    summary, 
    aside, 
    footer,
    date:new Date().toLocaleDateString() 
  });
  console.log(new Date().toLocaleDateString());
  await createManySections(sections,"setAdvertisingOwner",newAdvertising.dataValues.id)
  return {
    message:"New Adversiting was created",
    status: 200,
    succes:true,
  }
}

const getAdversitingHelper = async (page)=> {
  //!Falta hacer esta ruta (no olvides el comit) y hacer el paginado
  let pageSize = 6; // cantidad de elementos por página
  let offset = (page - 1) * pageSize;
  const givenPage = await Advertising.findAll({
    include:[{model:Section, as:"SectionsViews"}],
    limit: pageSize,
    offset: offset,
    order: [['createdAt', 'DESC']]
  })
 return  {
    message:"Advertising list successfuly fetched",
    status: 200,
    succes:true,
    data:givenPage
  }
}

const getDetailAdvertisingHelper = async (AdversitingId) => {
  const advertise = await Advertising.findByPk(AdversitingId, {
    include: [{model: Section, as:"SectionsViews"}]
  })
  return {
    message:"Advertising successfuly fetched",
    status: 200,
    succes:true,
    data: advertise
  }
}

const editAdvertisingHelper = async (bodyData) => {
  const {  id,property,newValue } = bodyData;
  const advertisingForEdit = await Advertising.findByPk(id)
  advertisingForEdit[property] = newValue
  await advertisingForEdit.save()
  return {
    message:"Advertising successfuly edited",
    status: 200,
    succes:true,
    data: advertisingForEdit
  }
}

const deleteAdvertisingHelper = async (params) => {
  const {id} = params
  const advertisingForDelete = await Advertising.findByPk(id,{
    include:{model:Section, as:"SectionsViews"}
  }) 
  await advertisingForDelete.SectionsViews.map(async objSection => {
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
  await Advertising.destroy({
    where:{
      id
    }
  })
  return {
    message:"Advertising successfuly edited",
    status: 200,
    succes:true,
  }
}

module.exports = {
  createNewAdvertisingHelper,
  getAdversitingHelper,
  getDetailAdvertisingHelper,
  editAdvertisingHelper,
  deleteAdvertisingHelper
}

