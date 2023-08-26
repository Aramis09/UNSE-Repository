const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Section",{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true 
    },
    title:{
      allowNull:true,
      type:DataTypes.STRING
    },
    textPartOne:{
      allowNull:true,
      type:DataTypes.TEXT
    },
    textPartTwo:{
      allowNull:true,
      type:DataTypes.TEXT
    },
    topImage:{
      allowNull:true,
      type:DataTypes.TEXT
    },
    middleImage:{
      allowNull:true,
      type:DataTypes.TEXT
    },
    belowImage:{
      allowNull:true,
      type:DataTypes.TEXT
    },
  })
}