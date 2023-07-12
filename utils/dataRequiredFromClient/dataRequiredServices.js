const dataRequiredToCreateNewService=["title","description","images","serviceOrientation"]
const dataRequiredToGetList = ["page"]
const dataRequiredToGetDetail = ["id"]

module.exports = {
  toCreateNew: dataRequiredToCreateNewService,
  toGetList:dataRequiredToGetList,
  toGetDetail:dataRequiredToGetDetail
}