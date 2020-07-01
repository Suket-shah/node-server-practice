"use strict";
const express = require("express");
const path = require("path"); // built into node

const app = express();
app.set("view engine", "ejs"); // this tells the node app to use EJS as templating engine
app.set("views", "views"); // this says where to look for the views
// application needs to know where templates are, and this say our views will be in a folder called views
// app.use() // the thing passed in is the middle ware
const PORT = process.env.PORT || 5000; // the first part is the production definition in the environment
app.listen(PORT, () => console.log(`server started at ${PORT}`));

//GET
app.get("/", (req, res, next) => {
  res.render("index", { name: "suket" }); // auto looks in the views folder and finds the ejs instead of html files
  //res.send sends litteral text
  //res.sendFile sends premade file
  //res.render renders a predefined template and populates it as well (second arg)
});

// dirname is the absolute path from the computer to where you are rightnow
// path.join is used to go through the directories
// react and angular are different from server side rendering they do client side rendering
// in order to render you need a templating engine. Ex. ejs, handlebars etc.
//POST

//etc.
