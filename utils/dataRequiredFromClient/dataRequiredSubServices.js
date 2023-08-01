const dataRequiredToCreateNewSubService = ["title","resume","description", "orientation","sections"]
const dataRequiredToGetList = ["page","orientation"]
const dataRequiredToGetDetail = ["id"]


module.exports = {
  toCreateNew: dataRequiredToCreateNewSubService,
  toGetList: dataRequiredToGetList,
  toGetDetail:dataRequiredToGetDetail
}