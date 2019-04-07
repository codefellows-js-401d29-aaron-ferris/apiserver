'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

///MOVE TO FINAL ROUTER FILE/////////////////////
// const swagger = require('swagger-ui-express');
// router.get('/swagger', swagger.server, swagger.setup(swaggerDocs));
// const swaggerDocs = require(docs/config/swagger.json);
/////////////////////////////////////////////////

// Esoteric Resources
const errorHandler = require( './middleware/500.js');
const notFound = require( './middleware/404.js' );
const authRouter = require( './auth/router.js' );
const roleRouter = require('./auth/role-router.js');
const apiRouter = require( `${cwd}/src/api/v1.js` );
app.use(v1Router); //fix the file path!!

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Documentation Resources
app.use('/docs', express.static('docs'));

// Routes
app.use(authRouter);
app.use(roleRouter);

// Catchalls
app.use(notFound);
app.use(errorHandler);

let isRunning = false;

module.exports = {
  server: app,
  start: (port) => {
    if( ! isRunning ) {
      app.listen(port, () => {
        isRunning = true;
        console.log(`Server Up on ${port}`);
      });
    }
    else {
      console.log('Server is already running');
    }
  },
};
