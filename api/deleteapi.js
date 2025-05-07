const {model} = require('./schema');
remove=async(id)=>{
  await model.findOneAndDelete({htno:id});
}
module.exports={remove};