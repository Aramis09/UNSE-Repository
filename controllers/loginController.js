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
  if(!userFound) return res.status(401).send({
    user: "",
    validPassword: false,
    token: "",
    error:true
  })
  const validPassword = await bcrypt.compare(password, userFound.password);
  if(!validPassword) return res.status(401).send({
    user: "",
    validPassword: false,
    token: "",
    error:true
  })
  const token = jwt.sign({
    name: userFound.name,
    id: userFound.dataValues.id
  }, process.env.TOKEN_SECRET)

  res.cookie("messiEntroAJugar",token,{
    maxAge:1000*3600*7, //PONEMOS EL TIEMPO DE VIDA DEL TOKEN
    httpOnly:false,
    // domain:".vercel.app",
    // sameSite: 'none',
    secure:false, //!IMPORTANTE, HAY QUE PASARLO A TRUE
    sameSite: "lax"
  })

  return res.status(200).send({
    user,
    validPassword,
    token,
    error:false
  })
}

module.exports = catchedAsyncErrors(loginController)