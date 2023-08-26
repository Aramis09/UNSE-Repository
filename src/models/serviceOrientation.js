const { DataTypes } = require("sequelize");


module.exports = (sequelize)=> 
  {sequelize.define("ServiceOrientation", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true  
    },
    name: {
      allowNull:false,
      type:DataTypes.STRING
    }
  })}
