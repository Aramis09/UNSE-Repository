
const verificationToken = (req,res) => res.status(200).send({
  error:"",
  acces:true,
})

module.exports = verificationToken