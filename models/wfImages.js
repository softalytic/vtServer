var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  wfProcess: {type: Number},
  wfProcessName: {type: String},
  wfFormName: {type: String},

  // Order Inputs detail
  wfProcess :  {type: String},
  wfProcessName :  {type: String},
  wfFormName :  {type: String},
  wfForm: {type: String},
  wfFormId :  {type: String},
  wfFormSplit :  {type: String},
  wfOrderFormId :  {type: String},
  wfOrderId :  {type: String},
  wfStaffOptId :  {type: String},
  wfStaffOptName :  {type: String},
  wfStaffOptShift :  {type: String},
  wfStaffLeadName :  {type: String},
  wfStaffLeadId :  {type: String},
  wfStaffTechId :  {type: String},
  wfStaffTechName :  {type: String},
  wfStaffXrayId :  {type: String},
  wfStaffXrayName :  {type: String},
  wfStaffQCId :  {type: String},
  wfStaffQCName :  {type: String},
  wfImg: {type: Array},

  wfBackupStatus: {type: String, default: "0"},

  // Server log timestamp
  updated: { type: Date, default: Date.now }

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('wfImages', schema);
