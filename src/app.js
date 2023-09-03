const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes/index.js');
const {DropError} = require("../utils/classError.js")
require('./db.js');

const server = express();

server.name = 'API';

const origins = ["https://client-unse-project.vercel.app","http://localhost:3000" ]
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser({ credentials: true }));
server.use(cors({
  origin:origins[1],
  credentials:true
}));

server.use(morgan('dev'));

// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', origins[0]); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept','auth-token','auth-secret-key');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  const response = new DropError({message:message, status:status, succes:false,typeError:err.typeError})
  console.log(response);
  res.status(status).send(response);
});

module.exports = server;
