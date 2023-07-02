require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_DATA
} = process.env;

const sequelize = new Sequelize(DB_DATA, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});


const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Advertising,Image,Service, ServiceOrientation } = sequelize.models;
// Aca vendrian las relaciones


Advertising.hasMany(Image, { foreignKey: 'setThumbnailImageTo',as: "ThumbnailImage"});
Image.belongsTo(Advertising, { foreignKey: 'setThumbnailImageTo',as: "ThumbnailImage" });
   
Advertising.hasMany(Image, { foreignKey: 'setCoverImageTo',as: "CoverImage"});
Image.belongsTo(Advertising, { foreignKey: 'setCoverImageTo',as: "CoverImage" });

//!SERVICE RELATIONSHIPS///////////////////////////////////////////////////////
Service.hasMany(Image, { foreignKey: 'setCoverImageToService',as: "CoverImageToService"});
Image.belongsTo(Service, { foreignKey: 'setCoverImageToService',as: "CoverImageToService" });

Service.belongsToMany(ServiceOrientation, { through: "Service_ServiceOrientation",as: "Oritentation" });
ServiceOrientation.belongsToMany(Service, { through: "Service_ServiceOrientation",as: "Oritentation" });
//!SERVICE RELATIONSHIPS///////////////////////////////////////////////////////


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
