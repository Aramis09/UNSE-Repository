const {Advertising,Section} = require("../src/db");
const { createManySections } = require("./sectionsHelper");


const createNewAdvertisingHelper = async (bodyData)=> {
  const { title,summary,aside,image,
  footer,sections } = bodyData
  const newAdvertising = await Advertising.create({ title, image,summary, aside, footer });
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
    offset: offset
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

module.exports = {
  createNewAdvertisingHelper,
  getAdversitingHelper,
  getDetailAdvertisingHelper
}

