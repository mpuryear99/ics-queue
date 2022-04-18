// This file serves as a mock API for development. It can also be used to configure a proxy.
// For all intensive purposes, this is an Express app that runs before the webpack dev server.
// References:
//  https://webpack.js.org/configuration/dev-server/#devserveronbeforesetupmiddleware
//  https://create-react-app.dev/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
//  https://github.com/facebook/create-react-app/blob/67b48688081d8ee3562b8ac1bf6ae6d44112745a/packages/react-scripts/config/webpackDevServer.config.js#L112-L122
//  https://expressjs.com/en/api.html#res

const { createProxyMiddleware } = require('http-proxy-middleware');
const { randomUUID } = require('crypto');
const machines_json = require("./data/dev/machines.json");
const appointments_mock = [];

function delay(ms=2500) {
  return new Promise(r => setTimeout(r, 2500));
}

module.exports = function(app) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error("Mock API running in production.");
  }

  if (process.env.REACT_APP_MOCK_API === 'true') {
    
    //#region Mock API Calls
    
    // machines
    app.get('/api/machines', async (req, res) => {
      await delay();
      res.json(machines_json);
    });

    // machines/<id>
    app.get('/api/machines/*', async (req, res) => {
      await delay();
      let _id = req.params[0];
      res.json(machines_json.find(x => x._id === _id));
    });


    // appointments
    app.get('/api/appointments', async (req, res) => {
      await delay();
      res.json(appointments_mock);
    });

    // appointments/<id>
    app.get('/api/appointments/*', async (req, res) => {
      await delay();
      let _id = req.params[0];
      res.json(appointments_mock.find(x => x._id === _id));
    });

    //#endregion

  // Create a middlewate proxy to route api calls to the backend
  } else {

    // proxy middleware options
    /** @type {import('http-proxy-middleware/dist/types').Options} */
    const options = {
      target: 'http://localhost:5000', // target host (backend)
      changeOrigin: true, // needed for virtual hosted sites
      pathRewrite: { '^/api': '' }, // remove api base path
    };

    app.use('/api', createProxyMiddleware(options));
  }
};