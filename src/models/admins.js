const { DataTypes } = require("sequelize");


module.exports = (sequelize) => sequelize.define("Admin",{
  id:{
    primaryKey:true,
    autoIncrement: true ,
    allowNull:false,
    type:DataTypes.INTEGER,
  },
  user:{
    allowNull:false,
    type:DataTypes.STRING
  },
  password:{
    allowNull:false,
    type:DataTypes.STRING
  },
})