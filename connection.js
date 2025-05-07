const mongoose = require('mongoose');
connection=()=>{
 mongoose.connect('mongodb://127.0.0.1:27017/students');
const db = mongoose.connection;
db.on('error',(err)=>{console.log('Error conecting db'+err)});
db.on('open', () => {
  console.log('Connected to MongoDB');
});
return db;
}
module.exports={connection};