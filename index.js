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
//  console.log(JSON.parse(req.body.customer));
  var type = req.body.type;
  //req.body.result
  
  return res.json({
   "status": type,  
  "short_id": "ok",
  "message": "ok",
  "reference": "mi-id-123"
  });
});



restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
