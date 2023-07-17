const dataRequiredToCreateNewService=["title","description","images","orientation","section"]
const dataRequiredToGetList = ["page"]
const dataRequiredToGetDetail = ["id","orientation"]

module.exports = {
  toCreateNew: dataRequiredToCreateNewService,
  toGetList:dataRequiredToGetList,
  toGetDetail:dataRequiredToGetDetail
}