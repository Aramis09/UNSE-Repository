const { Carrousel,Image } = require("../src/db")
const { createManyImages } = require("./imageHelper")

const createCarrouselHelper = async ({location,images,idAdvertising})=> {
  console.log({location,images});
  const selectedCondition = selectWhere(idAdvertising,location)

  const newCarrousel = await Carrousel.create(selectedCondition)

  await createManyImages(images,"setCarrouselOwner",newCarrousel.dataValues.id)

  const newCarrouselWithImages = await Carrousel.findByPk(newCarrousel.dataValues.id,{
    include:[{model:Image, as:"CarrouselContent"}]
  })
  return {
    message:"New Carrousel was created",
    status: 200,
    data:newCarrouselWithImages,
    succes:true,
  }
}

const getCarrouselDetailHelper = async (dataQuery) =>{
  const {location,idAdvertising} = dataQuery
  const whereSelected = selectWhere(idAdvertising,location)
  const carrouselFound = await Carrousel.findOne({
    where:whereSelected,
    include:[{model:Image, as:"CarrouselContent"}]
  })
  return {
    message:"all ok",
    status: 200,
    data: carrouselFound,
    succes:true,
  }
}

const editCarrouselHelper = async ({location,images,idAdvertising}) => {
  const conditionToSearch = selectWhere(idAdvertising,location) //! ojo al charqui idAdvertising es opcional
  const carrouselForEdit = await Carrousel.findOne({
    where: conditionToSearch,
    include:[{model:Image, as:"CarrouselContent"}]
  })
  await Image.destroy({
    where: {
      setCarrouselOwner:carrouselForEdit.dataValues.id
    },
  });
  await createManyImages(images,"setCarrouselOwner",carrouselForEdit.dataValues.id)

  const newCarrouselEdited = await Carrousel.findOne({
    where: conditionToSearch,
    include:[{model:Image, as:"CarrouselContent"}]
  })
  return {
    message:"all ok",
    status: 200,
    data: [newCarrouselEdited,carrouselForEdit],
    succes:true,
  }
}


const selectWhere = (idAdvertising,location) => {
  console.log(idAdvertising,"----------------------------------------------");
  if(idAdvertising) return {
    location,
    setAdvertisingOwner:idAdvertising
  }
  return {
    location
  }
}
module.exports = {
  createCarrouselHelper,
  getCarrouselDetailHelper,
  editCarrouselHelper
}