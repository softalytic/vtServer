var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  wfProcess: {type: Number},
  wfProcessName: {type: String},
  wfFormName: {type: String},

  // Order Inputs detail
  wfFormId: {type: String},
  wfOrderFormId: {type: String},
  wfOrderId: {type: String},

  wfImgTotal: {type: Number},
  wfImgNum: {type: Number},
  wfImg: {type: String},

  wfBackupStatus: {type: String, default: "0"},

  // Server log timestamp
  updated: { type: Date, default: Date.now }

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('wf3Images', schema);