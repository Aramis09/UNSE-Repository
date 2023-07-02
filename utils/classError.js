
class DropError {
  constructor({message, status = 400, succes,typeError}){
    typeError
    this.message = message
    this.status =  status
    this.succes = succes
    this.typeError = typeError
  } 
 }

 const throwError = ()=> {
  throw new DropError({
    message:"Error from server, please try again later",
    status: 500,
    succes:false,
    typeError:"Server error"
  })
}

 module.exports = {
  throwError,
  DropError
 }
