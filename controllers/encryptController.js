const catchedAsyncErrors = require("../utils/catchedAsyncErrors");
const bcrypt = require('bcrypt');
const { Admin } = require("../src/db")


const ecryptController = async (req,res) => {
  const { id,user,password } = req.body

  const salt =  await bcrypt.genSalt(9);
  const passwordEncrypt =  await bcrypt.hash(password, salt);
  
  const newAdmin = await Admin.create({
    id:id,
    user:user,
    password:passwordEncrypt
  })
  return res.status(200).send(newAdmin)
}

module.exports = catchedAsyncErrors(ecryptController)