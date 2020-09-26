'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var characterSchema = new Schema({
    name: String,
    nationality: String,
    bloodType: String,
    firstAppearance: String,
    fightingStyle: String,

})

module.exports = mongoose.model('Characters', characterSchema);