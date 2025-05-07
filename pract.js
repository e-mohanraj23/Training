const {EventEmitter}= require('events')
const emitter= new events.EventEmitter();
 emitter.on('event',()=>{
    console.log('event triggered')
 })
emitter.emit('event')  