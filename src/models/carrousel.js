const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Carrousel",{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true 
    },
    location:{
      allowNull:false,
      type:DataTypes.TEXT
    }
  })
}