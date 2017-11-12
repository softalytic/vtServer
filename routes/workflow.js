// This file handles all the workflow routing via express
var express = require('express');
var router = express.Router();

// Below are the data schema imported for mongodb operation, can append additional schema when needed
// Remember to update schema if there is any changes from the app
var Workflow1 = require('../models/workflow1');
var Workflow2 = require('../models/workflow2');
var Workflow3 = require('../models/workflow3');
var wf1Images = require('../models/wf1Images');
var wf2Images = require('../models/wf2Images');
var wf3Images = require('../models/wf3Images');
var erp = require('../models/erpData');

/* Submission route for wfForm 1, 2, 3 */
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

/* Query route by latest record for wfForm 1, 2, 3 */
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

/* Submission route of Images for wfForm 1, 2, 3 */
router.post('/form1/image/submit/',function ( req, res, next ) {
  console.log("Hello from 裸品流程卡 Submission");

  // Directly load the req.body into the Mongodb schema
  var wfInput = new wf1Images(req.body);

  wfInput.save(function ( err) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send("Has loaded successfully");
    }
  });
});

router.post('/form2/image/submit/',function ( req, res, next ) {
  console.log("Hello from 成品流程卡 Submission");

  // Directly load the req.body into the Mongodb schema
  var wfInput = new wf2Images(req.body);

  wfInput.save(function ( err) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send("Has loaded successfully");
    }
  });
});

router.post('/form3/image/submit/',function ( req, res, next ) {
  console.log("Hello from 电容器流程卡 Submission");

  // Directly load the req.body into the Mongodb schema
  var wfInput = new wf3Images(req.body);

  wfInput.save(function ( err) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send("Has loaded successfully");
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
  var wfInput = erp;

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

module.exports = router;
