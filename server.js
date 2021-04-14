// Imports
const express = require('express');
const chalk = require('chalk');
const nodemon = require('nodemon');
const morgan = require('morgan');
const debug = require('debug');
const router = require('./src/routes/router');

const server = express();
const port = process.env.PORT || 5000; // Gets a port from an environment variable or chooses 5000

server.use(morgan('tiny'));

/*
Checks the router.js file for the list of 
available routes. Routing should be handled
from server.js
*/
server.use('/', router);

server.listen(port, () => { 
	console.log(`Listening on port: ${chalk.green(port)}`);
	debug(`Listening on port: ${chalk.green(port)}`);
});
