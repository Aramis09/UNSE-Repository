const {Advertising,Image} = require("../src/db")


const createNewAdvertisingHelper = async (bodyData)=> {
  const { title,description,summary,aside,footer,image } = bodyData
  const newAdvertising = await Advertising.create({ title, description, summary, aside, footer });
  await Image.create({ url: image,setThumbnailImageTo:newAdvertising.dataValues.id });
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
    include:[{model:Image, as:"ThumbnailImage"}],
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
    include: [{model: Image, as:"CoverImage"}]
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

