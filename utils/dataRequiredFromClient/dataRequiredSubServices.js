const dataRequiredToCreateNewSubService = ["title","resume","description", "idService","sections"]
const dataRequiredToGetList = ["page", "size"]
const dataRequiredToGetDetail = ["id"]


module.exports = {
  toCreateNew: dataRequiredToCreateNewSubService,
  toGetList: dataRequiredToGetList,
  toGetDetail:dataRequiredToGetDetail
}