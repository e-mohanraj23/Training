const express = require('express');
const app = express();
app.use(express.json());
app.get('/',async(req,res)=>{
    try {
      return res.status(302).json();
    } catch (error) {
    return res.status(500).json();
    }
  });
  app.listen(4000, ()=>console.log('Server running on port: 4000'))