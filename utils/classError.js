
class DropError extends Error{
  constructor({message, status = 400, succes ,typeError}){
    super(message)
    this.statusCode = status
    this.messageDev = message
    this.succes = succes
    this.typeError = typeError
  } 
 }

 const throwError = ()=> {
  throw new DropError({
    status: 500,
    succes:false,
    typeError:"Server error"
  })
}

 module.exports = {
  throwError,
  DropError
 }
