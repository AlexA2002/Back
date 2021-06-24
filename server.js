const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();

app.use(cors())

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const customers = require('./routes /customer.routes')
app.use(customers)
// set port, listen for requests
app.listen(5000, () => {
  console.log("Server is running on port 3000.");
});

