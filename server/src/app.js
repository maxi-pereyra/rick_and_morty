const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const morgan = require('morgan');

const server = express();

server.name = 'API';

server.use(cookieParser())
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
       );
       res.header(
          'Access-Control-Allow-Methods',
          'GET, POST, OPTIONS, PUT, DELETE'
          );
          next();
   });
         
server.use(express.json());
server.use('/rickandmorty', router);

//error carching endware
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
   const status = err.status || 500;
   const message = err.message || err;
   console.error(err);
   res.status(status).send(message);
 });
         
 server.listen(3001, () => {
   console.log('% listening in port: ' + 3001);
});

module.exports = server;