const dataRequiredToCreateNewAdversiting = ["title","description","summary","aside","footer","image"]
const dataRequiredToGetList = ["page"]
const dataRequiredToGetDetail = ["id"]

module.exports = {
  toCreateNew: dataRequiredToCreateNewAdversiting,
  toGetList:dataRequiredToGetList,
  toGetDetail:dataRequiredToGetDetail
}