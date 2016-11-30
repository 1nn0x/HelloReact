//SET UP THE WEB SERVER

var express = require('express');

//Create our app
var app = express();

//Pass in the foldername
app.use(express.static('public'));

//Start the server app.listen("port", function)
app.listen("3000", function()
{
  console.log("Express server is up on port 3000");
});
