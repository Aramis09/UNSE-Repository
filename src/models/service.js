const { DataTypes } = require("sequelize");


module.exports = (sequelize)=> {
  sequelize.define("Service", {
    id:{
      allowNull:false,
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement: true   
    },
    title:{
      allowNull:false,
      type:DataTypes.STRING
    },
    description:{
      allowNull:false,
      type:DataTypes.STRING
    },
  
  })
}