const express = require("express");
const middlewares = require("../../../middlewares/exports");
const { deleteCloudImageHelper } = require("../../../helpers/helperCloudImage");
const imageManagerRouter = express()


imageManagerRouter.delete("/delete",middlewares.jwtVerify,
(req,res)=>{
  deleteImageHelper(req.query)
  res.status(200).send("destroy")
})


module.exports = imageManagerRouter