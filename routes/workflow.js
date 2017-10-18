var express = require('express');
var router = express.Router();
var Workflow1 = require('../models/workflow1');
var Workflow2 = require('../models/workflow2');

router.post('/form1/submit/',function ( req, res, next ) {
  console.log("Hello from 裸品流程卡");
  console.log("Print out the req.body before process it");
  console.log(req.body);

  // Directly load the req.body into the Mongodb schema
  var wfInput = new Workflow1(req.body);

  console.log("Print out the wfInput before saving it");
  console.log(wfInput);

  wfInput.save(function ( err, result ) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });

  // res.send("Hello world!");

});

router.post('/form2/submit/',function ( req, res, next ) {
  console.log("Hello from 成品流程卡");
  console.log("Print out the req.body before process it");
  console.log(req.body);

  // Directly load the req.body into the Mongodb schema
  var wfInput = new Workflow2(req.body);

  console.log("Print out the wfInput before saving it");
  console.log(wfInput);

  wfInput.save(function ( err, result ) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });

  // res.send("Hello world!");

});

/* Query route by latest record */
router.post('/form1/query/', function(req, res, next) {

  console.log(req.body);

  // Directly load the req.body into the Mongodb schema
  var wfInput = Workflow1;

  wfInput.find({ wfFormId: req.body.wfFormId}).
  sort('-updated').
  limit(1).
  exec(function ( err, data ) {
    console.log("Calling from Mongodb for result");
    if (err) {
      console.log("An error has been throw");
      return res.send(err);
    } else {
      console.log("Result found, showing the data");
      return res.send(data);
    }
  });

});

/* Query route by latest record */
router.post('/form2/query', function(req, res, next) {

  console.log(req.body);

  // Directly load the req.body into the Mongodb schema
  var wfInput = Workflow2;

  wfInput.find({ wfFormId: req.body.wfFormId}).
  sort('-updated').
  limit(1).
  exec(function ( err, data ) {
    console.log("Calling from Mongodb for result");
    if (err) {
      console.log("An error has been throw");
      return res.send(err);
    } else {
      console.log("Result found, showing the data");
      return res.send(data);
    }
  });

});


module.exports = router;
