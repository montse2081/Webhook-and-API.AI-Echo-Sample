"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//restService.use(bodyParser.json());



restService.post("/audio", function(req, res) {
  
  var speech = JSON.parse(req.body);
  //req.body.result
  
  return res.json({
   "status": "success",  
  "short_id": "asdass",
  "message": speech,
  "reference": "mi-id-123"
  });
});



restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
