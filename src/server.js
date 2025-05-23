require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOSTNAME

//config template engine
configViewEngine(app);

// Khai báo routes
app.use('/', webRoutes);

// test connection


// A simple SELECT query
connection.query(
  'select * from Users u',
  function(err, results, fields) {
    console.log(">>> results: ", results); // results contains rows returned by server
  }
);


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})