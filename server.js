const { json } = require('express');
const express = require('express');
require('dotenv').config();

const app = express();
const routes = require('./routes/contactRoutes');

// Middleware to parse JSON data from the request body and make it available on req.body 
app.use(json())
// Middleware to serve static files from the routes folder 
app.use('/', routes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
