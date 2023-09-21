const { Section } = require("../src/db")
const { typesRelationship } = require("../utils/complementsHelpers/sectionHelperComplement")

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

const createSectionHelper = async (bodyData) => {
  const { idOwner,typeOwner,dataSection } = bodyData
  console.log(bodyData);
    const relationship = typesRelationship[typeOwner]
    await createSection(dataSection,relationship,idOwner)
    return {
      message:"section was created",
      status: 200,
      succes:true,
      data: null
    }
}
const deleteSectionHelper = async (bodyData) => {
  const { id } = bodyData
  await Section.destroy({
    where: {
      id:id
    }
  });
  return {
    message:"section deleted",
    status: 200,
    succes:true,
    data: null
  }
}

module.exports = {
  createSection,
  createManySections,
  editSectionHelper,
  deleteSectionHelper,
  createSectionHelper
}

