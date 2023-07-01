const DropError = require("../../utils/classError")

const catchedClientError = (req,res,next)=> {
  const { title,description,summary,aside,footer,image } = req.body
  if(title&&description&&summary&&aside&&footer&&image) return next()
  throw new DropError({
    message:"Please send all data required", 
    status:400, 
    succes:false,
    typeError:"clientError"
  })
}

module.exports =  catchedClientError