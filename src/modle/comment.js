const mongoose =require('mongoose');
const  Schema  = mongoose.Schema;


const Comment = new Schema({
    name:String,
    content:String,
    idItiem:String
})

module.exports = mongoose.model('comments', Comment);
