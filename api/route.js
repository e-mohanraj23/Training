const express = require('express');
const insert= require('./insertapi.js')
const {fetch}= require('./fetchapi.js')
const {update}= require('./updateapi.js')
const {remove}= require('./deleteapi.js')
const {connection}=require('./connection.js');
connection();
const route=express.Router();
route.use(express.json())
route.post('/add',async(req,res)=>{
  try {
    const data=req.body;
    if(typeof data.htno!='number')
      return res.status(400).json({ result: false,message:"htno must be a number"});
    insert(data,res);
  } catch (error) {
  return res.status(500).json({result: false,message: error.message });
  }
});

route.get('/fetch/:htno',async(req,res)=>{
    try {
      const id= req.params.htno;
      const fd=fetch(id);
      return res.status(200).json({student:fd,message:"fetched"});
    } catch (error) {
    return res.status(500).json({result: false,message: error.message });
    }
  });

route.put('/update',async(req,res)=>{
    try{
      const data=req.body;
      update(data,res);
    }
    catch(error){
      return res.status(500).json({result: false,message: error.message });
    }
});

route.delete('/delete/:htno',async(req,res)=>{
    try {
      const id= req.params.htno;
      remove(id);
      return res.status(200).json({message:"student deleted"});
    } catch (error) {
    return res.status(500).json({result: false,message: error });  
    }
  });
module.exports=route;