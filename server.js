const express = require("express");
const fs = require('fs');
const path = require('path');
const exphbs = require("express-handlebars");
const hbs = exphbs.create();


//server setup
const app = express();
const port = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

// importing login routes and controllers
const loginRoutes = require ('./routes/loginRoutes');
const loginController = require('./controllers/loginController');

app.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}.`);
  });