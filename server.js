const express = require("express");
const fs = require('fs');
const path = require('path');
const exphbs = require("express-handlebars");
const hbs = exphbs.create();

//routes
const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');


//server setup
const app = express();
const port = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}.`);
  });
  