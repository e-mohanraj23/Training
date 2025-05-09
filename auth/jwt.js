// const express = require('express');
const jwt = require('jsonwebtoken');
// const app = express();
// app.use(express.json());
let secretkey='secretkey'
// app.post('/user',(req,res)=>{
    const token= jwt.sign({user:123,},secretkey);
//     res.json(token)
// });
// function verifyToken(req, res, next) {
// const token = req.header('Authorization');
if (!token) return res.status(401).json({ error: 'Access denied' });
// try {
 const decoded = jwt.verify(token,secrekey);
 console.log(decoded)
//  next();
//  } catch (error) {
//  res.status(401).json({ error: 'Invalid token' });
//  }
//  };
// app.get('/uv',verifyToken,(req,res)=>{
//     res.status(200).json({ message: 'Protected route accessed' });
// });
// app.listen(3000)
