const dataRequiredToEdit = ["id","property","newValue"]
const dataRequiredToDelete = ["id"]

const dataRequiredToPost= ["idOwner","typeOwner","sectionData"]



module.exports = { 
  toEdit:dataRequiredToEdit,
  toDelete:dataRequiredToDelete,
  toPost:dataRequiredToPost
}