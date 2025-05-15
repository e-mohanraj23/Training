const express = require('express');
const {saveStudent,model} = require('./schema.js');
const {connection}=require('./connection.js');
connection();
const app = express();
app.use(express.json());

app.post('/add',async(req,res)=>{
  try {
    const data=req.body;
    const student= await saveStudent(data);
    return res.status(200).json({message:"data inserted sucess", result: true});
  } catch (error) {
  return res.status(500).json({result: false,message: error });
  }
});
app.get('/fetch/:htno',async(req,res)=>{
  try {
    const id= req.params.htno;
    const student= await model.findOne({htno:id});
    if(student.result=="FAIL"){
     const display= await model.findOne({htno:id},'-_id -__v -total -percentage');
     return res.status(200).json(display);
    }
    else{
      const display=await model.findOne({htno:id},'-_id -__v');
     return res.status(200).json(display);
    }
    return res.status(200).json({student:student,message:"fetched"});
  } catch (error) {
  return res.status(500).json({result: false,message: error });
  }
});
app.put('/update/:htno',async(req,res)=>{
  try {
    const id=req.params.htno;
    const data=req.body.tamil;
    // console.log(data);
    // const result =await model.findByIdAndUpdate({ htno:id},{tamil:data});
    student.updateOne(
      { htno: id },
      function (err, result) {
})
    return res.status(200).json(data,{message:"student updated"});
  } catch (error) {
  return res.status(500).json({result: false,message: error.message});  
  }
});
app.delete('/delete/:htno',async(req,res)=>{
  try {
    const id= req.params.htno;
    const student= await model.findOneAndDelete({htno:id});
    return res.status(200).json({message:"student deleted"});
  } catch (error) {
  return res.status(500).json({result: false,message: error });  
  }
});

app.listen(3001, ()=>console.log('Server running on port: 3001'))
