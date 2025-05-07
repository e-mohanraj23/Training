const {model} = require('./schema');
update=async(data,res)=>{
        await model.updateOne({htno: data.htno },{$set:data})
        const tocal= await model.findOne({htno:data.htno},'-_id -__v')
        const {saveStudent}=require('./calculate')
        await saveStudent(tocal)
        res.status(200).json({message:'Data Updated'})
}
module.exports={update}