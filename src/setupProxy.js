// This file serves as a mock API for development. It can also be used to configure a proxy.
// For all intensive purposes, this is an Express app that runs before the webpack dev server.
// References:
//  https://webpack.js.org/configuration/dev-server/#devserveronbeforesetupmiddleware
//  https://create-react-app.dev/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
//  https://github.com/facebook/create-react-app/blob/67b48688081d8ee3562b8ac1bf6ae6d44112745a/packages/react-scripts/config/webpackDevServer.config.js#L112-L122

const { createProxyMiddleware } = require('http-proxy-middleware');
const machines_json = require("./data/dev/machines.json");

module.exports = function(app) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error("Mock API running in production.");
  }

  // Mock API calls
  if (process.env.REACT_APP_MOCK_API === 'true') {

    app.get('/api/getmachines', async (req, res) => {
      await new Promise(r => setTimeout(r, 2500));
      res.json(machines_json);
    });


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