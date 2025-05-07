const express = require('express');
const route = require('./route');
const app= express();
app.use('/api',route);
app.listen(3000,()=>console.log('Server running on port: 3000'));