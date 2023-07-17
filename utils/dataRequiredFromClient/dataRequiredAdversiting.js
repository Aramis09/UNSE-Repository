const dataRequiredToCreateNewAdversiting = ["title","summary","image","aside",
"footer","sections"]
//"textPartOne","textPartTwo","topImage","middleImage","belowImage"
const dataRequiredToGetList = ["page"]
const dataRequiredToGetDetail = ["id"]

module.exports = {
  toCreateNew: dataRequiredToCreateNewAdversiting,
  toGetList:dataRequiredToGetList,
  toGetDetail:dataRequiredToGetDetail
}