const express = require("express");
const middlewares = require("../../../middlewares/exports");
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

imageManagerRouter.delete("/delete",middlewares.jwtVerify,
(req,res)=>{
  const {publicId} = req.query
  cloudinary.uploader.destroy(publicId)
  res.status(200).send("destroy")
})

module.exports = imageManagerRouter