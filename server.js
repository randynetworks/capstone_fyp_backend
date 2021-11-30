const bodyParser = require('body-parser');
const express = require('express');
const app = express();

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

app.listen(3000, () => {
  console.log(`Server started on http://localhost:3000`, '\n');
  console.log('=======================================');
});
