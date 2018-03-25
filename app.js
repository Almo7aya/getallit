// the main file for the express app

const express = require('express');
const app = express();
const CORS = require('cors');

const { mainProxy } = require('./utils/proxy.config');

const index = require('./routes/index');

// setting the CORS middle-ware
app.use(CORS());

// setting the proxy configs
mainProxy(app);

// set the routes 
// app.get('/', index);

module.exports = {
    app
};