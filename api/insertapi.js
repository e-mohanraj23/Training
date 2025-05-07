const {model} = require('./schema');
async function insert(data,res){
    const student=model(data);
    await student.save();
    return res.status(200).json({student:student,message:"data inserted success", result: true});
}
module.exports=insert;