module.exports = asyncController => {
  return (req,res,next) => {
    asyncController(req,res).catch((err)=> {
      next(err)
    })
  }
} 