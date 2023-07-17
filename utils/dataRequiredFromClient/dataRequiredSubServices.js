const dataRequiredToCreateNewSubService = ["title","resume","description", "idService","sections"]
const dataRequiredToGetList = ["page"]
const dataRequiredToGetDetail = ["id"]


module.exports = {
  toCreateNew: dataRequiredToCreateNewSubService,
  toGetList: dataRequiredToGetList,
  toGetDetail:dataRequiredToGetDetail
}