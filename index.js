//Dependencies
let express = require('express')
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let path = require('path');
let engine = require('./app.js');

//Route
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/')));

app.get('/', function (req, res) {
    res.render('index');
});

//Socket
io.on('connection', function(socket){
    console.log('a user connected');

    //Engine Initiate
    engine.main({},(action) => {        
        io.emit('initiate', action)

        socket.on('registerAttack', function(payload){
            console.log(payload)
            action.registerAttack(payload)
        })

        action.view = (payload) => {
            io.emit('apply', payload)
        }
    })    

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });

//Initiate
http.listen(3000, function () {
    console.log('listening on *:3000');
});
