
const dataRequiredToCreateNewSubService = ["title","resume","description", "orientation","sections"]
const dataRequiredToGetList = ["page","orientation","size"]
const dataRequiredToGetDetail = ["id"]
const dataRequiredToDelete= ["id"]

const dataRequiredToEdit = ["id","property","newValue"]


module.exports = {
  toCreateNew: dataRequiredToCreateNewSubService,
  toGetList: dataRequiredToGetList,
  toGetDetail:dataRequiredToGetDetail,
  toEdit:dataRequiredToEdit,
  toDelete:dataRequiredToDelete
}