const dataRequiredToCreateNewAdversiting = ["title","summary","image","aside",
"footer","sections"]
//"textPartOne","textPartTwo","topImage","middleImage","belowImage"
const dataRequiredToGetList = ["page"]
const dataRequiredToGetDetail = ["id"]
const dataRequiredToDelete = ["id"]

const dataRequiredToEdit = ["id","property","newValue"]
module.exports = {
  toCreateNew: dataRequiredToCreateNewAdversiting,
  toGetList:dataRequiredToGetList,
  toGetDetail:dataRequiredToGetDetail,
  toEdit:dataRequiredToEdit,
  toDelete:dataRequiredToDelete
}