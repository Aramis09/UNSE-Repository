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
      allowNull:true,
      type:DataTypes.TEXT
    },
    orientation:{
        allowNull:false,
        type:DataTypes.STRING
    }
  
  })
}