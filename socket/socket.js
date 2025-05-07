const net=require('net');
const server=net.createServer(Socket=>{
       console.log("socket server created");
       Socket.write("hello client");
       Socket.on('end',()=>{
        console.log("client disconnected")
       })
});
server.listen(3001,()=>{console.log("server connected on 3001")});