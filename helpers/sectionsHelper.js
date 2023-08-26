const { Section } = require("../src/db")

const createSection = async (sectionData,asRelationship,owner)=> {
  const {title,textPartOne,
    textPartTwo,
    topImage,
    middleImage,
    belowImage} = sectionData
  const processStatus = Section.create({ 
    title,
    textPartOne,
    textPartTwo,
    topImage,
    middleImage,
    belowImage,
    [asRelationship]:owner })
  .then(res => true)
  .catch(err => false)
  return processStatus
}

const createManySections = async (sectionArray,asRelationship,owner)=> {
  const processStatus = Promise.all(sectionArray.map(sectionData => {
    return createSection(sectionData,asRelationship,owner)
  }))
  .then(res => true)
  .catch(err => false)
  return processStatus
}
const editSectionHelper = async (bodyData) => {
  const { id,property,newValue } = bodyData;
  const sectionForEdit = await Section.findByPk(id)
  sectionForEdit[property] = newValue
  await sectionForEdit.save()
  return {
    message:"section successfuly edited",
    status: 200,
    succes:true,
    data: sectionForEdit
  }
}

module.exports = {
  createSection,
  createManySections,
  editSectionHelper
}