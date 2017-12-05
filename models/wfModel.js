var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  wfProcess: {type: Number},
  wfProcessName: {type: String},
  wfFormName: {type: String},

  // Order Inputs detail
  wfFormId: {type: String},
  wfFormSplit: {type: Number},
  wfOrderFormId: {type: String},
  wfOrderId: {type: String},
  wfOrderBatchId: {type: String},
  wfOrderBatchQty: {type: String},

  wfOrderBOMNote: {type: String},
  wfOrderNote: {type: String},
  wfOrderTotalQty: {type: Number},
  wfOrderTotalGoodQty: {type: Number},
  wfOrderRMId: {type: String},
  wfOrderSeries: {type: String},
  wfOrderSpec: {type: String},
  wfOrderDim: {type: String},

  wfClientId: {type: String},
  wfSalesOrderId: {type: String},
  wfSpecCap: {type: String},
  wfSpecDF: {type: String},
  wfSpecLC: {type: String},
  wfSpecZESR: {type: String},
  wfPriorWfFormId: {type: String},
  wfNakedProductSpec: {type: String},
  wfSalesOrderQty: {type: Number},
  wfOrderFormNote: {type: String},
  wfSalesOrderNote: {type: String},
  wfOrderDate: {type: String},
  wfOrderStartDate: {type: String},
  wfOrderEstFinishDate: {type: String},
  wfOrderDeliveryDate: {type: String},
  wfOrderTK: {type: String},

  // Raw Material Inputs
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

  // Operational Input
  wfOptMachineId: {type: String},
  wfOptInputDate: {type: String},
  wfOptStartTime: {type: String},
  wfOptFinishTime: {type: String},
  wfOptBadQty: {type: Number},
  wfOptGoodQty: {type: Number},

  // Ageing Part1
  wfAgeDegSet: {type: String},
  wfAgeDegAct: {type: String},
  wfAgeVoltSet: {type: String},
  wfAgeVoltAct: {type: String},
  wfAgeCurrentSet: {type: String},
  wfAgeCurrentAct: {type: String},
  wfAgeTimeSet: {type: String},
  wfAgeTimeAct: {type: String},
  wfAgeNote: {type: String},

  // Additional volt for Ageing
  wfAutoAgeVoltAct1: {type: String},
  wfAutoAgeVoltAct2: {type: String},
  wfAutoAgeVoltAct3: {type: String},
  wfAutoAgeVoltAct4: {type: String},
  wfAutoAgeVoltAct5: {type: String},
  wfAutoAgeVoltAct6: {type: String},
  wfAutoAgeVoltAct7: {type: String},

  // Auto ageing part2
  wfAutoAgeOpenVolt: {type: String},
  wfAutoAgeShortVolt: {type: String},
  wfAutoAgeOpen: {type: String},
  wfAutoAgeShort: {type: String},
  wfAutoAgeHighCapacity: {type: String},
  wfAutoAgeLowCapacity: {type: String},
  wfAutoAgeWear: {type: String},
  wfAutoAgeVoltLeak: {type: String},
  wfAutoAgeLook: {type: String},

  //Staff Input section
  wfStaffOptId: {type: String},
  wfStaffOptName: {type: String},
  wfStaffOptShift: {type: String},
  wfStaffTechId: {type: String},
  wfStaffTechName: {type: String},
  wfStaffXrayId: {type: String},
  wfStaffXrayName: {type: String},
  wfStaffQCId: {type: String},
  wfStaffQCName: {type: String},
  wfStageStatus: {type: String},
  wfQCPass: {type: String},
  wfQCPassCode: {type: String},
  wfQCSignOff: {type: String},
  wfQCInputNote: {type: String},

  // Appendix
  wfFormStatus: {type: Boolean},
  wfProcessStatus: {type: Boolean},
  // wfOutputStatus: {type: String, default: "0"},
  // wfBackupStatus: {type: String, default: "0"},

  // Server log timestamp
  exported: { type: Boolean, default: false},
  exportTs: { type: Date },
  updated: { type: Date, default: Date.now }

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('workflow1', schema);