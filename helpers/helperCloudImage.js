require('dotenv').config();

const {
  CLOUD_NAME,API_KEY,API_SECRET
} = process.env;
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name:CLOUD_NAME,
  api_key:API_KEY,
  api_secret:API_SECRET
})
const deleteCloudImageHelper = (querys) => {
  const {publicId} = querys
  cloudinary.uploader.destroy(publicId)
}
module.exports = {
  deleteCloudImageHelper
}