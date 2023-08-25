const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Image",{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true 
    },
    url:{
      allowNull:false,
      type:DataTypes.TEXT
    }
  })
}