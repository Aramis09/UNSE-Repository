const { DataTypes } = require("sequelize");


module.exports = (sequelize) => sequelize.define("About",{
  id:{
    primaryKey:true,
    allowNull:false,
    type:DataTypes.INTEGER,
  },
  title:{
    allowNull:false,
    type:DataTypes.STRING
  },
  image:{
    allowNull:false,
    type:DataTypes.TEXT
  },
  textPartOne:{
    allowNull:false,
    type:DataTypes.TEXT
  },
  textPartTwo:{
    allowNull:false,
    type:DataTypes.TEXT
  },
})