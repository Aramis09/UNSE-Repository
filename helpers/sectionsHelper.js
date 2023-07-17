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

module.exports = {
  createSection,
  createManySections
}