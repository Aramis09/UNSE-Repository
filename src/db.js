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
const { Advertising,Image,Service, ServiceOrientation,SubService,Section,AsideContent } = sequelize.models;
// Aca vendrian las relaciones

//!ADVERTISING RELATIONSHIPS///////////////////////////////////////////////////////

Advertising.hasMany(Section, { foreignKey: 'setAdvertisingOwner',as: "SectionsViews"});
Section.belongsTo(Advertising, { foreignKey: 'setAdvertisingOwner',as: "SectionsViews" });

//!ADVERTISING RELATIONSHIPS///////////////////////////////////////////////////////



//!SERVICE RELATIONSHIPS///////////////////////////////////////////////////////
Service.hasMany(Section, { foreignKey: 'setServiceOwners',as: "SectionsViewsService"});
Section.belongsTo(Service, { foreignKey: 'setServiceOwners',as: "SectionsViewsService" });

// Service.belongsToMany(ServiceOrientation, { through: "Service_ServiceOrientation",as: "Oritentation" });
// ServiceOrientation.belongsToMany(Service, { through: "Service_ServiceOrientation",as: "Oritentation" });

Service.hasMany(SubService, { foreignKey: "setTheBelongToService",as: "BelongToTheService" })
SubService.belongsTo(Service, { foreignKey: "setTheBelongToService",as: "BelongToTheService" });
//!SERVICE RELATIONSHIPS///////////////////////////////////////////////////////

//!SECTION RELATIONSHIPS///////////////////////////////////////////////////////
Section.hasMany(AsideContent, { foreignKey: 'setOwner',as: "AsideContent"});
AsideContent.belongsTo(Section, { foreignKey: 'setOwner',as: "AsideContent " });
//!SECTION RELATIONSHIPS///////////////////////////////////////////////////////

//!SUBSERVICE  RELATIONSHIPS///////////////////////////////////////////////////////
SubService.hasMany(Section, { foreignKey: 'setSubServiceOwner',as: "SectionsViewsSubServ"});
Section.belongsTo(SubService, { foreignKey: 'setSubServiceOwner',as: "SectionsViewsSubServ" });
//!SUBSERVICE  RELATIONSHIPS///////////////////////////////////////////////////////



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
