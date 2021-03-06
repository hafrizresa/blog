var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let userSchema = new Schema ({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    articles: [{type: Schema.Types.ObjectId, ref: 'Article'}],
    following: [{type: Schema.Types.ObjectId, ref: 'User'}]
})

let User = mongoose.model('User', userSchema)

module.exports = User