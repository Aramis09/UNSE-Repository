const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("SubService", {
    id:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement: true  
  
    },
    title:{
      allowNull:false,
      type:DataTypes.STRING
    },
    resume:{
      allowNull:false,
      type:DataTypes.TEXT
    },
    description:{
      allowNull:false,
      type:DataTypes.TEXT
    },
  
  })
}