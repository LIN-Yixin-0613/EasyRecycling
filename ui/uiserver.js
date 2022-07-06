//express is a server side framework, so this file name is "uiserver"

require('dotenv').config(); //read sample.env and so UI_SERVER_PORT and UI_API_ENDPOINT become properties of process.env
//process.env.UI_API_ENDPOINT = http://localhost:3000/graphql
//process.env.UI_SERVER_PORT = 8000
const express = require('express');
//how does the middleware work???
const proxy = require('http-proxy-middleware');

const app = express();

app.use(express.static('public'));

//this part of API_PROXY_TARGET is unnecessary
const apiProxyTarget = process.env.API_PROXY_TARGET;
if (apiProxyTarget) {
  app.use('/graphql', proxy({ target: apiProxyTarget }));
}


const UI_API_ENDPOINT = process.env.UI_API_ENDPOINT
  || 'http://100.26.154.187:3000/graphql'; //why 100.26.154.187:3000/graphql?????
const env = { UI_API_ENDPOINT };

app.get('/env.js', (req, res) => {
  res.send(`window.ENV = ${JSON.stringify(env)}`); // ` is the same as ' or "
});

const port = process.env.UI_SERVER_PORT || 8000;

app.listen(port, () => {
  console.log(`UI started on port ${port}`);
});
