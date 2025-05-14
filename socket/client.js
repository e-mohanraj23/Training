// const net=require('net');
// const client=net.connect({port:3001},()=>{
//     client.on('ready',()=>{console.log("socket server connected")});
//     client.on('data',(data)=>{
//         console.log(data.toString());
//        });
//        client.end();
//     client.on('end',()=>{
//         console.log("server disconnected")
//        client.end();

//     })
// })

const socketIo=require('socket.io-client');
const a=socketIo.connect('http://localhost:3001');
a.emit('data',"hello")
a.on('msg',(data)=>{
        console.log(data)});
