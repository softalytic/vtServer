var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  wfSpecCap: {type: String},
  wfSpecDF: {type: String},
  wfSpecLC: {type: String},
  wfSpecZESR: {type: String},
  wfAgeVoltSet: {type: String},
  wfPriorWfFormId: {type: String},
  wfNakedProductSpec: {type: String},
  wfFormId: {type: String},
  wfOrderId: {type: String},
  wfOrderSeries: {type: String},
  wfOrderBatchId: {type: String},
  wfOrderRMId: {type: String},
  wfForm: {type: String},
  wfOrderSpec: {type: String},
  wfOrderDim: {type: String},
  wfOrderBatchQty: {type: String},
  wfOrderTotalQty: {type: String},
  wfSalesOrderQty: {type: String},
  wfClientId: {type: String},
  wfOrderFormNote: {type: String},
  wfOrderNote: {type: String},
  wfOrderBOMNote: {type: String},
  wfSalesOrderNote: {type: String},
  wfOrderDate: {type: String},
  wfOrderStartDate: {type: String},
  wfOrderEstFinishDate: {type: String},
  wfOrderDeliveryDate: {type: String},
  wfOrderTK: {type: String},
  wfOptMachineId: {type: String},
  wfRMFoilPosName: {type: String},
  wfRMFoilNegName: {type: String},
  wfRMPaperName: {type: String},
  wfRMPinPosName: {type: String},
  wfRMPinNegName: {type: String},
  wfRMGlueName: {type: String},
  wfRMSolName: {type: String},
  wfRMShellName: {type: String},
  wfRMPlasticName: {type: String},
  wfRMCoverName: {type: String},
  wfRMUpBeltName: {type: String},
  wfRMDownBeltName: {type: String},
  wfRMBaseName: {type: String},
  wfRMCircleName: {type: String},
  wfRMFoilPosSerial: {type: String},
  wfRMFoilNegSerial: {type: String},
  wfRMPaperSerial: {type: String},
  wfRMGlueSerial: {type: String},
  wfRMSolSerial: {type: String},
  wfRMPinPosSerial: {type: String},
  wfRMPinNegSerial: {type: String},
  wfRMPlasticSerial: {type: String},
  wfRMShellSerial: {type: String},
  wfRMCoverSerial: {type: String},
  created: { type: Date},

  // Server log timestamp
  updated: { type: Date, default: Date.now }

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('ERPData', schema);