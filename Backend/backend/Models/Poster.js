var mongoose = require('mongoose');

var posterSchema = new mongoose.Schema({
     posterID:{type:String, required:true},
     image:{type:String, required:true},
});

const Poster = mongoose.model('Poster', posterSchema);

module.exports = Poster;
