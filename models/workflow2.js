var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  wfProcess: {type: Number},
  wfProcessName: {type: String},

  // Order Inputs detail
  wfOrderFormId: {type: String},
  WfOrderId: {type: String},
  wfOrderBatchId: {type: String},
  wfOrderBatchQty: {type: String},

  wfOrderFormNote: {type: String},
  wfOrderBOMNote: {type: String},
  wfOrderNote: {type: String},
  wfOrderSupNote: {type: String},
  wfOrderTotalQty: {type: Number},
  wfOrderTotalGoodQty: {type: Number},
  wfOrderRMId: {type: String},
  wfOrderSeries: {type: String},
  wfOrderSpec: {type: String},
  wfOrderDim: {type: String},
  wfClientId: {type: String},
  wfSalesOrderId: {type: String},

  // Raw Material Inputs
  wfRMUpBeltName: {type: String},
  wfRMUpBeltSerial: {type: String},
  wfRMDownBeltName: {type: String},
  wfRMDownBeltSerial: {type: String},
  wfRMBaseName: {type: String},
  wfRMBaseSerial: {type: String},
  wfRMCircleName: {type: String},
  wfRMCricleSerial: {type: String},
  wfRMPrintName: {type: String},
  wfRMPrintSerial: {type: String},

  // Operational Input
  wfSpecCap: {type: String},
  wfSpecDF: {type: String},
  wfSpecLC: {type: String},
  wfSpecZESR: {type: String},
  wfSpecNote: {type: String},

  wfOptMachineId: {type: String},
  wfOptInputDate: {type: String},
  wfOptStartTime: {type: String},
  wfOptFinishTime: {type: String},
  wfOptBadQty: {type: Number},
  wfOptGoodQty: {type: Number},

  //Staff Input section
  wfStaffOptId: {type: String},
  wfStaffOptShift: {type: String},
  wfStaffTechId: {type: String},
  wfElecPass: {type: Boolean},
  wfLookPass: {type: Boolean},
  wfQCSignOff: {type: String},
  
  updated: { type: Date, default: Date.now }
  
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Workflow2', schema);