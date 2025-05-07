const mongoose = require('mongoose');
const schema=mongoose.Schema({
  htno:Number,
  name: String,
    tamil: Number,
    english: Number,
    maths: Number,
    science: Number,
    ss: Number,
});
schema.index({htno:1},{unique:true});
const model=mongoose.models.student || mongoose.model('student',schema);
module.exports={model};
