var express = require('express');
var router = express.Router();
var Workflow1 = require('../models/workflow1');
var Workflow2 = require('../models/workflow2');
var Workflow3 = require('../models/workflow3');

router.post('/form1/submit/',function ( req, res, next ) {
  console.log("Hello from 裸品流程卡 Submission");
  console.log("Print out the 裸品流程卡 Submission req.body: " + JSON.stringify(req.body));

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
});

router.post('/form2/submit/',function ( req, res, next ) {
  console.log("Hello from 成品流程卡 Submission");
  console.log("Print out the 成品流程卡 Submission req.body: " + JSON.stringify(req.body));

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
});

router.post('/form3/submit/',function ( req, res, next ) {
  console.log("Hello from 电容器流程卡 Submission");
  console.log("Print out the 电容器流程卡 Submission req.body: " + JSON.stringify(req.body));

  // Directly load the req.body into the Mongodb schema
  var wfInput = new Workflow3(req.body);

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
});

/* Query route by latest record */
router.post('/form1/query/', function(req, res, next) {
  console.log("Hello from 裸品流程卡 Submission");
  console.log("Print out the 裸品流程卡 Submission req.body: " + JSON.stringify(req.body));

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
router.post('/form2/query/', function(req, res, next) {
  console.log("Hello from 成品流程卡 Submission");
  console.log("Print out the 成品流程卡 Submission req.body: " + JSON.stringify(req.body));

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

/* Query route by latest record */
router.post('/form3/query/', function(req, res, next) {
  console.log("Hello from 电容器流程卡 Submission");
  console.log("Print out the 电容器流程卡 Submission req.body: " + JSON.stringify(req.body));

  // Directly load the req.body into the Mongodb schema
  var wfInput = Workflow3;

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
