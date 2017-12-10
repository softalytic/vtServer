var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  dttm: {type: String},
  staff: {type: String},
  machine: {type: String}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('staffData', schema);