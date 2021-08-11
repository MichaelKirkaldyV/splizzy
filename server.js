
var express = require("express");
var app = express();
var mongoose = require('mongoose');
var path = require("path");
var bodyParser = require('body-parser');

app.use(express.static( __dirname + "/public/dist" ));

app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

//listen
var server = app.listen(3000, function() {
	console.log("listening on port 3000");
});
