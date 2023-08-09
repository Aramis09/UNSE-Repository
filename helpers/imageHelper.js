const { Image } = require("../src/db")

const createAImage = async (imageUrl,asRelationship,buddyId)=> {
  const processStatus = await Image.create({ url: imageUrl,[asRelationship]:buddyId })
  .then(res => true)
  .catch(err => false)
  return processStatus
}

const createManyImages = async (imagesArray,asRelationship,buddyId)=> {
  const processStatus = Promise.all(imagesArray.map(imageUrl => {
    return createAImage(imageUrl,asRelationship,buddyId)
  }))
  .then(res => true)
  .catch(err => false)
  return processStatus
}



module.exports = {
  createAImage,
  createManyImages
}