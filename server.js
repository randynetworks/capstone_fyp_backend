const bodyParser = require('body-parser');
const express = require('express');
const app = express();

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
