const socketIo=require('socket.io');
const http=require('http');
const server=http.createServer()
const io=socketIo(server)
io.on('connection',Socket=>{
    console.log(Socket.id)
     Socket.on('data',(data)=>{
        console.log("data:"+data)
    Socket.emit('msg',"received")});
});
server.listen(3001,()=>{console.log("server connected on 3001")});