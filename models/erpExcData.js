var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  wfProcess: {type: Number},
  wfProcessName: {type: String},
  wfForm: {type: Number},
  wfFormId: {type: String},
  wfFormSplit: {type: Number},
  wfOptMachineId: {type: String},

  wfSpecCap: {type: String},
  wfSpecDF: {type: String},
  wfSpecLC: {type: String},
  wfSpecZESR: {type: String},
  wfAgeVoltSet: {type: String},
  wfPriorWfFormId: {type: String},
  wfNakedProductSpec: {type: String},
  wfOrderId: {type: String},
  wfOrderSeries: {type: String},
  wfOrderBatchId: {type: String},
  wfOrderRMId: {type: String},
  wfOrderSpec: {type: String},
  wfOrderDim: {type: String},
  wfOrderBatchQty: {type: Number},
  wfOrderTotalQty: {type: Number},
  wfSalesOrderQty: {type: Number},
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
  wfRMFoilPosName: {type: String},
  wfRMFoilPosLName: {type: String},
  wfRMFoilPosCapFrom: {type: String},
  wfRMFoilPosCapTo: {type: String},
  wfRMFoilPosWidth: {type: String},
  wfRMFoilPosLength: {type: String},
  wfRMFoilNegName: {type: String},
  wfRMFoilNegLName: {type: String},
  wfRMFoilNegCapFrom: {type: String},
  wfRMFoilNegCapTo: {type: String},
  wfRMFoilNegWidth: {type: String},
  wfRMFoilNegLength: {type: String},
  wfRMFoilNegQty: {type: Number},
  wfRMPaperName: {type: String},
  wfRMPaperQty: {type: Number},
  wfRMPinPosName: {type: String},
  wfRMPinNegName: {type: String},
  wfRMPinQty: {type: Number},
  wfRMGlueName: {type: String},
  wfRMSolName: {type: String},
  wfRMSolQty: {type: Number},
  wfRMShellName: {type: String},
  wfRMShellQty: {type: Number},
  wfRMPlasticName: {type: String},
  wfRMPlasticQty: {type: Number},
  wfRMCoverName: {type: String},
  wfRMCoverQty: {type: Number},
  wfRMUpBeltName: {type: String},
  wfRMDownBeltName: {type: String},
  wfRMBaseName: {type: String},
  wfRMCircleName: {type: String},
  wfRMFoilPosSerial: {type: String},
  wfRMFoilNegSerial: {type: String},
  wfRMFoilPosLSerial: {type: String},
  wfRMFoilNegLSerial: {type: String},
  wfRMPaperSerial: {type: String},
  wfRMGlueSerial: {type: String},
  wfRMSolSerial: {type: String},
  wfRMPinPosSerial: {type: String},
  wfRMPinNegSerial: {type: String},
  wfRMPlasticSerial: {type: String},
  wfRMShellSerial: {type: String},
  wfRMCoverSerial: {type: String},
  wfOptStartQty: {type: Number},
  wfBadTotal: {type: Number},
  wfGoodTotal: {type: Number},
  wfFormStatus: {type: Number},
  wfProcessStatus: {type: Number},
  created: {type: String}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('ERPexcData', schema);