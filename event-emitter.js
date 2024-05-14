const EventEmitter = require('events')
const myEmitter = new EventEmitter()

myEmitter.on('birthday', ()=>{
    console.log('happy birthday to you')
})

myEmitter.on('birthday', (gift)=>{
    console.log(`i will send you a ${gift}`)
})

myEmitter.emit('birthday','bike')
