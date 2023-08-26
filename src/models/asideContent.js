const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("AsideContent",{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true 
    },
    title:{
      allowNull:false,
      type:DataTypes.STRING
    },
    text:{
      allowNull:false,
      type:DataTypes.TEXT
    }
  })
}