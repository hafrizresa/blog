var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let commentSchema = new Schema({
    word: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    articleId: {
        type: Schema.Types.ObjectId,
        ref:'Article'
    }
})

let comment = mongoose.model('Comment', commentSchema)

module.exports = comment