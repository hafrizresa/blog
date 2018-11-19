var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: String,
    body: String,
    picture: String,
    comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    userId: {type: Schema.Types.ObjectId, ref:'User'}
})

let article = mongoose.model('Article', articleSchema)

module.exports = article