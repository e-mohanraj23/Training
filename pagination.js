const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/reps');
const db = mongoose.connection;
db.on('error',(err)=>{console.log('Error conecting db'+err)});
db.on('open', () => {console.log('Connected to MongoDB')});
const schema= new mongoose.Schema({
  htno:Number,
  name: String,
  subjects:{
    tamil: Number,
    english: Number,
    maths: Number,
    science: Number,
    ss: Number,
  }
});
const model=mongoose.model('reps',schema);
app.post('/insert-many', async (req, res) => {
  try {
    const data = req.body;
    const result = await model.insertMany(data);
    res.status(201).json({ message: 'Students inserted successfully', result });
  } catch (error) {
    res.status(500).json({ message: 'Error inserting students', error: error.message });
  }
});
app.get('/fetch',async(req,res)=>{
  try {
    //  const display= await model.find().limit(3).select('-_id -__v');
    //  return res.status(200).json(display);
    const limit = req.query.limit;
    const page = req.query.page;
    const skip=(page-1)*limit;
    const result = await model.find().limit(limit).skip(skip);
    res.status(200).send(result);
  } catch (error) {
  return res.status(500).json({result: false,message: error });
  }
});
app.listen(5000)