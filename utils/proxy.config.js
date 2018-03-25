const proxy = require('http-proxy-middleware');

/**
 * @param {expressApp} app: the current express app
 * @returns null
 * 
 * @description: sets the proxy to the express app
 * @type with side effects
 */
const mainProxy = (app) => {
    app.use('/', proxy({
        target: 'http://www.sex.com',
    }));
};

const onMainProxyReq = (proxyReq, req, res) => {
    // const requstedUrl = req.query.url;
    // proxyReq.setHeader('host', requstedUrl);
    proxyReq.path = '';
};

module.exports = {
    mainProxy
}