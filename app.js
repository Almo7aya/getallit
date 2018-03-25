// the main file for the express app

const express = require('express');
const app = express();
const CORS = require('cors');
const http = require('http');

const { mainProxy } = require('./utils/proxy.config');

const index = require('./routes/index');

// setting the CORS middle-ware
app.use(CORS());

// setting the proxy configs
// mainProxy(app);

// set the routes 
// app.get('/', index);


app.get('**', (req, client_res) => {

    var options = {
        hostname: 'xnxx.com',
        port: 80,
        path: req.url,
        method: 'GET'
      };
    
      var proxy = http.request(options, function (res) {
        res.pipe(client_res, {
          end: true
        });
      });
    
      req.pipe(proxy, {
        end: true
      });

});


module.exports = {
    app
};