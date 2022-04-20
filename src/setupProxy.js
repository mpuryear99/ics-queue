// This file serves as a mock API for development. It can also be used to configure a proxy.
// For all intensive purposes, this is an Express app that runs before the webpack dev server.
// References:
//  https://webpack.js.org/configuration/dev-server/#devserveronbeforesetupmiddleware
//  https://create-react-app.dev/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
//  https://github.com/facebook/create-react-app/blob/67b48688081d8ee3562b8ac1bf6ae6d44112745a/packages/react-scripts/config/webpackDevServer.config.js#L112-L122
//  https://expressjs.com/en/api.html#res

const { createProxyMiddleware } = require('http-proxy-middleware');
const { randomUUID } = require('crypto');
const express = require('express');

const machines_json = require("./data/dev/machines.json");
const appointments_mock = [];

function delay(ms=2500) {
  return new Promise(r => setTimeout(r, ms));
}


/**
 * 
 * @param {express.Application} app
 */
module.exports = function(app) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error("Mock API running in production.");
  }

  if (process.env.REACT_APP_MOCK_API === 'true') {

    //#region Mock API Calls
    app.use(express.json());

    // machines
    app.get('/api/machines', async (req, res) => {
      await delay();
      res.json(machines_json);
    });

    // machines/<id>
    app.get('/api/machines/:id', async (req, res) => {
      await delay();
      let _id = req.params["id"];
      res.json(machines_json.find(x => x._id === _id));
    });


    // appointments
    app.get('/api/appointments', async (req, res) => {
      await delay();
      res.json(appointments_mock);
    });

    // appointments/add
    app.post('/api/appointments/add', async (req, res) => {
      await delay(250);
      let data = {
        '_id':       randomUUID(),
        'user_id':   req.query['name'],
        'machine_id': req.query['machine_id'],
        'username':  req.query['username'],
        'startTime': req.query['startTime'],
        'endTime':   req.query['endTime']
      }
      appointments_mock.push(data);
      res.status(201).send(data._id); //OK
    });

    // appointments/add/post
    app.post('/api/appointments/add/post', async (req, res) => {
      await delay(250);
      let data = req.body;
      data._id = randomUUID();
      appointments_mock.push(data);
      res.status(201).send(data._id); //Created
    });

    // appointments/query
    app.get('/api/appointments/query', async (req, res) => {
      await delay(250);
      resList = [...appointments_mock];

      if (req.query.machine_id != null)
        resList = resList.filter(a => a.machine_id == req.query.machine_id);
      if (req.query.user_id != null)
        resList = resList.filter(a => a.user_id == req.query.user_id);
      if (req.query.startBefore != null)
        resList = resList.filter(a => a.startTime < req.query.startBefore);
      if (req.query.startAfter != null)
        resList = resList.filter(a => a.startTime > req.query.startAfter);
      if (req.query.endBefore != null)
        resList = resList.filter(a => a.endTime < req.query.endBefore);
      if (req.query.endAfter != null)
        resList = resList.filter(a => a.endTime > req.query.endAfter);

      if (req.query.checkOnly != null) {
        res.set('Content-Type', 'text/html');
        res.send((resList.length > 1).toString());
      }
      else {
        res.set('Content-Type', 'application/json');
        res.json(resList);
      }
    });

    // appointments/<id>
    app.get('/api/appointments/:id', async (req, res) => {
      await delay();
      let _id = req.params["id"];
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