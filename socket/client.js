const net=require('net');
const client=net.connect({port:3001},()=>{
    client.on('ready',()=>{console.log("socket server connected")});
    client.on('data',(data)=>{
        console.log(data.toString());
       });
       client.end();
    client.on('end',()=>{
        console.log("server disconnected")
       client.end();

    })
})