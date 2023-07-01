const { DataTypes } = require("sequelize");


module.exports = (sequelize)=> {
  sequelize.define("Advertising", {
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
    description:{
      allowNull:false,
      type:DataTypes.STRING
    },
    summary:{
      allowNull:false,
      type:DataTypes.STRING
    },
    aside:{
      allowNull:false,
      type:DataTypes.STRING
    },
    footer:{
      allowNull:false,
      type:DataTypes.STRING
    },
  })
}