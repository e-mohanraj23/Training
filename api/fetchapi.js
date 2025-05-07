const {model} = require('./schema');
const {saveStudent}=require('./calculate')
fetch=async(id)=>{
  const fetch=await model.findOne({htno:id},'-_id -__v');
  await saveStudent(fetch);
  return fetch;
}
module.exports={fetch};