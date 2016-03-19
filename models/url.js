var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
  originalURL : String,
  tinyURL : String
});

module.exports = mongoose.model('Url' , urlSchema);;
