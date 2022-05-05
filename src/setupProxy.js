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

/**@type {Array<Object>} */
const machines_json = require("./data/dev/machines.json");
/**@type {Array<Object>} */
const users_json = require("./data/dev/users.json");
const { deflate } = require('zlib');
/**@type {Array<Object>} */
var appointments_mock = [];

function delay(ms=1500) {
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
      let m = machines_json.find(x => x._id == _id);
      if (m === undefined) {
        res.status(404);
      }
      res.json(m);
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
        res.json((resList.length > 0));
      }
      else if (req.query.count != null) {
        res.json(resList.length);
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
      let appt = appointments_mock.find(x => x._id == _id);
      if (appt === undefined) {
        res.status(404);
      }
      res.json(appt);
    });

    // appointments/<id>/delete
    app.delete('/api/appointments/:id/delete', async (req, res) => {
      await delay(250);
      let _id = req.params["id"];
      let numDeleted = appointments_mock.length;
      appointments_mock = appointments_mock.filter(x => !(x._id === _id));
      numDeleted -= appointments_mock.length
      res.send(numDeleted.toString());
    });


    // users
    app.get('/api/users', async (req, res) => {
      await delay();
      res.json(users_json);
    });

    // usercount
    app.get('/api/usercount', async (req, res) => {
      await delay(125);
      res.json(users_json.length);
    });

    // users/<id>
    app.get('/api/users/:id', async (req, res) => {
      await delay();
      let _id = req.params["id"];
      let u = users_json.find(x => x._id == _id);
      if (u === undefined) {
        res.status(404);
      }
      res.json();
    });

    // users/add
    app.post('/api/users/add', async (req, res) => {
      await delay(250);
      let data = req.body;
      data._id = randomUUID();
      users_json.push(data);
      res.status(201).send(data._id); //Created
    });

    // users/<id>/delete
    app.delete('/api/users/:id/delete', async (req, res) => {
      await delay(250);
      let _id = req.params["id"];
      let idx = users_json.findIndex(u => u._id === _id);
      if (idx > -1) {
        users_json.splice(idx, 1)
        res.send("1");
      } else {
        res.send("0");
      }
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