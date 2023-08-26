const dataRequiredToCreateNewService=["title","description","images","orientation","section"]
const dataRequiredToGetList = ["page"]
const dataRequiredToGetDetail = ["id","orientation"]
const dataRequiredToEdit = ["id","property","newValue"]

module.exports = {
  toCreateNew: dataRequiredToCreateNewService,
  toGetList:dataRequiredToGetList,
  toGetDetail:dataRequiredToGetDetail,
  toEdit:dataRequiredToEdit,
  toDelete:["id"]
}