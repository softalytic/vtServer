var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  wfProcess: {type: Number},
  wfProcessName: {type: String},
  wfForm: {type: String},
  wfFormId: {type: String},
  wfFormSplit: {type: Number},
  wfOptMachineId: {type: String},
  wfSpecCap: {type: String},
  wfSpecDF: {type: String},
  wfSpecLC: {type: String},
  wfSpecZESR: {type: String},
  wfAgeVoltSet: {type: Number},
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
  wfSalesOrderId: {type: String},
  wfOrderDate: {type: String},
  wfOrderStartDate: {type: String},
  wfOrderEstFinishDate: {type: String},
  wfOrderDeliveryDate: {type: String},
  wfOrderTK: {type: String},
  wfRMFoilPosName: {type: String},
  wfRMFoilPosLName: {type: String},
  wfRMFoilPosCapFrom: {type: String},
  wfRMFoilPosCapTo: {type: String},
  wfRMFoilPosWidth: {type: Number},
  wfRMFoilPosLength: {type: Number},
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
  wfRMPinPosQty: {type: Number},
  wfRMPinNegQty: {type: Number},
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
  wfOrderTotalGoodQty: {type: Number},
  wfSalesOrderId: {type: String},
  wfRMFoilPosQty: {type: Number},
  wfRMCoverCheck: {type: String},
  wfRMWindingTime: {type: String},
  wfRMWindingDeg: {type: String},
  wfDryWindingDeg: {type: String},
  wfWetEmptyAir: {type: String},
  wfWetAir: {type: String},
  wfWashWindingDeg: {type: String},
  wfWashDryWindingDeg: {type: String},
  wfWashDryTime: {type: String},
  wfQCCheck: {type: String},
  wfRandomCheckInfo: {type: Number},
  wfSpecNote: {type: String},
  wfAgeDetailAG1: {type: String},
  wfAgeDetailAG2: {type: String},
  wfAgeDetailAG3: {type: String},
  wfAgeDetailAG4: {type: String},
  wfAgeDetailAG5: {type: String},
  wfAgeDetailAG6: {type: String},
  wfAgeDetailLCT: {type: String},
  wfAgeDetailLC: {type: String},
  wfAgeDetailCAP: {type: String},
  wfAgeDetailDF: {type: String},
  wfAgeDetailStaffConfirm: {type: String},
  wfOptInputDate: {type: String},
  wfOptInputEndDate: {type: String},
  wfOptWashMachine: {type: String},
  wfOptStartTime: {type: String},
  wfOptFinishTime: {type: String},
  wfOptBadQtyItem: {type: String},
  wfOptBadQty: {type: String},
  wfOptGoodQty: {type: String},
  wfOptGoodQty2: {type: String},
  wfBadItem1: {type: String},
  wfBadQty1: {type: String},
  wfBadItem2: {type: String},
  wfBadQty2: {type: String},
  wfBadItem3: {type: String},
  wfBadQty3: {type: String},
  wfBadItem4: {type: String},
  wfBadQty4: {type: String},
  wfBadItem5: {type: String},
  wfBadQty5: {type: String},
  wfBadItem6: {type: String},
  wfBadQty6: {type: String},
  wfBadItemTotal: {type: String},
  wfAgeDegSet: {type: String},
  wfAgeDegAct: {type: String},
  wfAgeVoltAct: {type: String},
  wfAgeCurrentSet: {type: String},
  wfAgeCurrentAct: {type: String},
  wfAgeTimeSet: {type: String},
  wfAgeTimeAct: {type: String},
  wfAgeNote: {type: String},
  wfAutoAgeVoltAct1: {type: String},
  wfAutoAgeVoltAct2: {type: String},
  wfAutoAgeVoltAct3: {type: String},
  wfAutoAgeVoltAct4: {type: String},
  wfStaffOptId: {type: String},
  wfStaffOptName: {type: String},
  wfStaffOptShift: {type: String},
  wfStaffLeadName: {type: String},
  wfStaffLeadId: {type: String},
  wfStaffTechId: {type: String},
  wfStaffTechName: {type: String},
  wfStaffXrayId: {type: String},
  wfStaffXrayName: {type: String},
  wfStaffQCId: {type: String},
  wfStaffQCName: {type: String},
  wfQCPass: {type: Number},
  wfQCSignOff: {type: String},
  wfQCInputNote: {type: String},
  wfOrderSupNote: {type: String},
  wfNakedProductSerial: {type: String},
  wfRMUpBeltSerial: {type: String},
  wfRMDownBeltSerial: {type: String},
  wfRMBaseSerial: {type: String},
  wfRMCricleSerial: {type: String},
  wfRMPrintName: {type: String},
  wfRMPrintSerial: {type: String},
  wfFinalCheckInfo: {type: String},
  wfElecPass: {type: String},
  wfLookPass: {type: String},
  wfOptStartQty: {type: Number},
  wfBadTotal: {type: Number},
  wfGoodTotal: {type: Number},
  wfFormStatus: {type: Boolean},
  wfProcessStatus: {type: Boolean},
  created: {type: String},
  appUpload: {type: String},
  wfFormExcept: {type: Boolean},
  wfReadOnly: {type: Boolean},
  wfProcessNew: {type: Boolean},
  wfLastCompletedWf: {type: Number},
  wfErrorMsg: {type: String},
  // wfOutputStatus: {type: String, default: "0"},
  // wfBackupStatus: {type: String, default: "0"},

  // Server log timestamp
  exported: { type: Boolean, default: false},
  exportTs: { type: Date },
  updated: { type: Date, default: Date.now }

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('workflow', schema);
