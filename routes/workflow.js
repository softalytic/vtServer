// This file handles all the workflow routing via express
var express = require('express');
var router = express.Router();

// Below are the data schema imported for mongodb operation, can append additional schema when needed
// Remember to update schema if there is any changes from the app
var wfModel = require('../models/wfModel');
var wfImages = require('../models/wfImages');
var erp = require('../models/erpData');
var erpExc = require('../models/erpExcData');
var staff = require('../models/staffData');

/* Submission route for wfForm*/
router.post('/form/submit/',function ( req, res, next ) {
  console.log("Hello from 裸品流程卡 Submission");
  console.log("Print out the 裸品流程卡 Submission req.body: " + JSON.stringify(req.body));

  // Directly load the req.body into the Mongodb schema
  var wfInput = new wfModel(req.body);

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

/* Query route by latest record for wfForm*/
router.post('/form/query/', function(req, res, next) {
  console.log("Hello from 流程卡 Submission");
  console.log("Print out the 流程卡 Submission req.body: " + JSON.stringify(req.body));

  // Directly load the req.body into the Mongodb schema
  var wfInput = wfModel;

  wfInput.find({ wfFormId: req.body.wfFormId , wfFormSplit: req.body.wfFormSplit}).
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

/* Submission route of Images for wfForm*/
router.post('/form/image/submit/',function ( req, res, next ) {
  console.log("Hello from 裸品流程卡 Submission");
  // console.log("wfImgTotal: " + req.body.wfImgTotal + "wfImgNum: " + req.body.wfImgNum);
  // Directly load the req.body into the Mongodb schema
  var wfInput = new wfImages(req.body);

  wfInput.save(function ( err) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log("Image has been uploaded");
      res.send("Has loaded successfully");
    }
  });
});

router.post('/form/image/query/',function ( req, res, next ) {
  console.log("Hello from 流程卡 image query");
  console.log("Print out the 流程卡 image query req.body: " + JSON.stringify(req.body));

  // Directly load the req.body into the Mongodb schema
  var wfInput = new wfImages(req.body);

  wfInput.find({ wfFormId: req.body.wfFormId , wfFormSplit: req.body.wfFormSplit}).
  sort('-updated').
  limit(10).
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

/* ERP query for Workflow data*/
router.post('/erp/query/',function ( req, res, next ) {
  console.log("Hello from ERP data query");

  // Directly load the req.body into the Mongodb schema
  var wfInput = erp;

  console.log("ERP Data request");
  console.log(req.body);

  wfInput.find({ wfFormId: req.body.wfFormId}).
  sort('-created').
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

router.post('/erp/submit/',function ( req, res, next ) {
  console.log("Hello from ERP data submit");

  // Directly load the req.body into the Mongodb schema
  var wfInput = new erp(req.body);

  console.log("ERP Data request");
  console.log(req.body);

  wfInput.save(function ( err) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send("Has loaded successfully");
    }
  });

});

/* ERP Abnormal query for Workflow data*/
router.post('/erp/query/exc/',function ( req, res, next ) {
  console.log("Hello from ERP data query");

  // Directly load the req.body into the Mongodb schema
  var wfInput = erpExc;

  console.log("ERP Exception Data request");
  console.log(req.body);

  wfInput.find({ wfFormId: req.body.wfFormId}).
  sort('-created').
  limit(1).
  exec(function ( err, data ) {
    console.log("Calling from Mongodb for ERP Exc result");
    if (err) {
      console.log("An error has been throw from ERP Exc");
      return res.send(err);
    } else {
      console.log("Result found from ERP Exc, showing the data");
      return res.send(data);
    }
  });
});

router.post('/erp/submit/exc/',function ( req, res, next ) {
  console.log("Hello from ERP data submit");

  // Directly load the req.body into the Mongodb schema
  var wfInput = new erpExc(req.body);

  console.log("ERP Data request");
  console.log(req.body);

  wfInput.save(function ( err) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send("Has loaded successfully");
    }
  });

});

/* ERP Staff */
router.post('/erp/query/staff/',function ( req, res, next ) {
  console.log("Hello from Staff data query");

  // Directly load the req.body into the Mongodb schema
  var wfInput = staff;

  console.log("Pulling Staff Data request" + JSON.stringify(req.body));

  wfInput.find().
  sort('-dttm').
  limit(1).
  exec(function ( err, data ) {
    console.log("Calling from Mongodb for pulling Staff result");
    if (err) {
      console.log("An error has been throw from staff");
      return res.send(err);
    } else {
      console.log("Result found from Staff, pulling the data");
      return res.send(data);
    }
  });
});

router.post('/erp/query/staff/dttm/',function ( req, res, next ) {
  console.log("Hello from Staff dttm data query");

  // Directly load the req.body into the Mongodb schema
  var wfInput = staff;

  console.log("Staff Data dttm request" + JSON.stringify(req.body));

  var input = "";

  try {
    input = req.body.dttm
  } catch (err){
    input = req.body
  }

  wfInput.find().
  sort('-dttm').
  limit(1).
  exec(function ( err, data ) {
    console.log("Calling from Mongodb for checking staff result");
    if (err) {
      console.log("An error has been throw from checking staff data");
      return res.send(err);
    } else {
      console.log("Showing the latest staff"+ JSON.stringify(data[0].dttm));
      return res.send(data[0].dttm);
    }
  });
});

module.exports = router;
