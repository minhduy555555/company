const mongoose =require('mongoose');
var slug = require('mongoose-slug-generator')
const  Schema  = mongoose.Schema;
mongoose.plugin(slug)

const Company = new Schema({
    name:String,
    star:{type:Number,default:0},
    date:{type:Date,default:Date.now},
    image:String,
    description:String,
    abum:{type:Array, default:'no abum'},
    slug:{ type: String, slug:'name', unique: true }
})

module.exports = mongoose.model('companysnews', Company);

