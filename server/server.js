const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express();
const server = require('http').Server(app)

const io = require('socket.io')(server)

io.on('connection', function(socket) {
    socket.on('msg',function(data) {
        io.emit('receiveMsg',data)
    })
})
const userRouter = require('./user')

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)

server.listen('9093',function() {
    console.log('Node app start as port 9093')
})