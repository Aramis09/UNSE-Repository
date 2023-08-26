const { DataTypes } = require("sequelize");


module.exports = (sequelize) => sequelize.define("Admin",{
  id:{
    primaryKey:true,
    allowNull:false,
    type:DataTypes.INTEGER,
    autoIncrement: true,
  },
  user:{
    allowNull:false,
    type:DataTypes.TEXT
  },
  password:{
    allowNull:false,
    type:DataTypes.TEXT
  },
})