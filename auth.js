const jwt = require('jsonwebtoken');
let secretkey='secretkey'
const token= jwt.sign({user:123,},secretkey);
const verify = jwt.verify(token,secretkey); 
console.log(verify);
