// the main file for the express app

const express = require('express');
const app = express();
const CORS = require('cors');

// setting the CORS middle-ware
app.use(CORS());

// setting the proxy configs
// app.use('/proxy');

// set the routes 
app.get('/');

module.exports = {
    app
};