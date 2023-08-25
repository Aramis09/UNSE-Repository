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
    summary:{
      allowNull:false,
      type:DataTypes.TEXT
    },
    aside:{
      allowNull:true,
      type:DataTypes.TEXT
    },
    footer:{
      allowNull:true,
      type:DataTypes.TEXT
    },
    image:{
      allowNull:false,
      type:DataTypes.TEXT
    },
    date:{
      allowNull:false,
      type:DataTypes.STRING
    }
  })
}