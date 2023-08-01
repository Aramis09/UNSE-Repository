const express = require("express")
const cloudinary = require('cloudinary').v2;
const imageManagerRouter = express()

cloudinary.config({
  cloud_name:"dynnwv7md",
  api_key:"461588566863238",
  api_secret:"krdH2NPcRFX_Z6pNWc84xlr1f5o"
})
imageManagerRouter.delete("/delete",(req,res)=>{
  const {publicId} = req.query
  cloudinary.uploader.destroy(publicId)
  res.status(200).send("destroy")
})

module.exports = imageManagerRouter