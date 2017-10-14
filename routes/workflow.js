var express = require('express');
var router = express.Router();
var Workflow1 = require('../models/workflow1');
var Workflow2 = require('../models/workflow2');

/* GET users listing. */
router.post('/names', function(req, res, next) {

  console.log(req.body);
  // Users.findOne(req.body, function (err, doc ) {
  //   if (err) {
  //     return res.send(err);
  //   } else {
  //     res.send(doc.email);
  //   }
  // });
  // res.send('respond with a resource');
});


router.post('/form1/',function ( req, res, next ) {
  console.log("Hello from 裸品流程卡");
  console.log(req.body);

  // var users = new Users({
  //   firstName: req.body.ingredientName,
  //   lastName: req.body.param2,
  //   email: req.body.param1,
  //   password: req.body.ingredientName
  // });

  // console.log(users);

  // users.save(function ( err, result ) {
  //   if (err) {
  //     console.log(err);
  //     res.send(err);
  //   } else {
  //     console.log(result);
  //     res.send(result);
  //   }
  // });
  res.send("Hello world!");

});

router.post('/form2/',function ( req, res, next ) {
  console.log("Hello from 成品流程卡");
  console.log("Print out the req.body before process it");
  console.log(req.body);

  // standard way to input into mongodb
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

module.exports = router;
