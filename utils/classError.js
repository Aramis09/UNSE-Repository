
class DropError {
  constructor({message, status = 400, succes,typeError}){
    typeError
    this.message = message
    this.status =  status
    this.succes = succes
    this.typeError = typeError
  } 
 }

 module.exports = DropError
