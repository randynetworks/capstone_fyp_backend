const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();

let port = process.env.PORT || 3000;
let web = process.env.WEB;

// CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// parse aplikasi JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
let routes = require('./router/routes');
routes(app);

app.listen(port, () => {
  console.log(`Server started on ${web} port ${process.env.PORT}`, '\n');
  console.log('=======================================');
});
