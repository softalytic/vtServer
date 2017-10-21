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
  WfOrderId: {type: String},
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

  // Raw Material Inputs
  wfRMFoilPosName: {type: String},
  wfRMFoilPosSerial: {type: String},
  wfRMFoilPosLName: {type: String},
  wfRMFoilPosLSerial: {type: String},
  wfRMFoilNegName: {type: String},
  wfRMFoilNegSerial: {type: String},
  wfRMFoilNegLName: {type: String},
  wfRMFoilNegLSerial: {type: String},
  wfRMPaperName: {type: String},
  wfRMPaperSerial: {type: String},
  wfRMGlueName: {type: String},
  wfRMGlueSerial: {type: String},
  wfRMSolName: {type: String},
  wfRMSolSerial: {type: String},
  wfRMPinPosName: {type: String},
  wfRMPinPosSerial: {type: String},
  wfRMPinNegName: {type: String},
  wfRMPinNegSerial: {type: String},
  wfRMPlasticName: {type: String},
  wfRMPlasticSerial: {type: String},
  wfRMShellName: {type: String},
  wfRMShellSerial: {type: String},
  wfRMCoverName: {type: String},
  wfRMCoverSerial: {type: String},
  wfRMWindingTime: {type: String},
  wfRMWindingDeg: {type: String},

  wfMachineId: {type: String},
  wfShift: {type: String},
  wfInputDate: {type: String},
  wfStartTime: {type: String},
  wfFinishTime: {type: String},
  wfBadQty: {type: String},
  wfGoodQty: {type: String},

  wfAgeingDegSet: {type: String},
  wfAgeingDegAct: {type: String},

  wfAgeingVoltAct1: {type: String},
  wfAgeingVoltAct2: {type: String},
  wfAgeingVoltAct3: {type: String},
  wfAgeingVoltAct4: {type: String},
  wfAgeingVoltAct5: {type: String},
  wfAgeingVoltAct6: {type: String},
  wfAgeingVoltAct7: {type: String},

  wfAgeingVoltSet: {type: String},
  wfAgeingVoltAct: {type: String},
  wfAgeingCurrentSet: {type: String},
  wfAgeingCurrentAct: {type: String},
  wfAgeingTimeSet: {type: String},
  wfAgeingTimeAct: {type: String},
  wfAgeingNote: {type: String},

  wfOpenVolt: {type: String},
  wfShortVolt: {type: String},
  wfOpen: {type: String},
  wfShort: {type: String},
  wfHighCapacity: {type: String},
  wfLowCapacity: {type: String},
  wfWear: {type: String},
  wfVoltLeak: {type: String},
  wfLook: {type: String},

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

  //  Appendix
  wfFormStatus: {type: String},
  wfProcessStatus: {type: String},

  updated: { type: Date, default: Date.now }

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Workflow3', schema);