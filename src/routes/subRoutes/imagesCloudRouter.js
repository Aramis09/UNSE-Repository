const express = require("express")
require('dotenv').config();
const {
  CLOUD_NAME,API_KEY,API_SECRET
} = process.env;
const cloudinary = require('cloudinary').v2;
const imageManagerRouter = express()

cloudinary.config({
  cloud_name:CLOUD_NAME,
  api_key:API_KEY,
  api_secret:API_SECRET
})

imageManagerRouter.delete("/delete",(req,res)=>{
  const {publicId} = req.query
  cloudinary.uploader.destroy(publicId)
  res.status(200).send("destroy")
})

module.exports = imageManagerRouter