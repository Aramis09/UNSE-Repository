require('dotenv').config();
const catchedAsyncErrors = require("../utils/catchedAsyncErrors");
const {Admin} = require("../src/db")
const bcrypt = require("bcrypt") 
const jwt = require("jsonwebtoken")



const loginController = async (req,res)=> {
  const {user, password} = req.body
  const userFound = await Admin.findOne({
    where:{
      user
    }
  })
  const validPassword = await bcrypt.compare(password, userFound.password);

  const token = jwt.sign({
    name: userFound.name,
    id: userFound.dataValues.id
  }, process.env.TOKEN_SECRET)
  return res.status(200).send({
    user,
    validPassword,
    token
  })
}

module.exports = catchedAsyncErrors(loginController)