const app=require("express")();
const server=require("http").createServer(app);
const cors=require("cors");

const mongoose = require('mongoose');

const users = require('./models/users');


const url = 'mongodb://localhost:27017/videochat';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

var session = require('express-session');
var FileStore = require('session-file-store')(session);

const userRouter = require('./routes/userRouter');
const myInfoRouter = require('./routes/myInfoRouter');

const io=require("socket.io")(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
});

app.use(cors());

const PORT=process.env.PORT || 5000;

app.use(session({
    name:'session-id',
    secret:'12345-67890-09876-54321',
    saveUninitialized:false,
    resave:false,
    store: new FileStore()
}));

function auth(req,res,next){
    console.log(req.session);

    if(!req.session.user){
        var err = new Error('You are not authenticated!');
        err.status = 403;
        return next(err);
    }else{
        if(req.session.status === 'authenticated'){
            next();
        }else{
            var err = new Error('You are not authenticated!');
            err.status = 403;
            next(err);
        }
    }  
}

app.use('/users',userRouter);
app.use(auth);
app.use('/home',myInfoRouter);

app.get("/",(req,res)=>{
    res.send("server is running")
});


io.on('connection',(socket)=>{
    socket.emit('me',socket.id);
    socket.on('disconnect',()=>{
        socket.broadcast.emit("callended");
    });

    socket.on("calluser",({userToCall,signalData,from,name})=>{
        io.to(userToCall).emit("calluser",{signal:signalData,from,name});
    });

    socket.on("answercall",(data)=>{
        io.to(data.to).emit("callaccepted",data.signal);
    });
});

server.listen(PORT,()=>console.log("server listening on port"+PORT));





// connect.then((db)=>{
//     users.create({
//         name: 'joaquin',
//         password:'smartvignesh',
//         mail:'joaquin@gmail.com',
//         sockId: "0afht2vb7hifr",
//         friends:[],
//         active: {
//             isActive:false,
//             lastActive:new Date().toISOString()
//         }
//     }).then((user)=>{
//         console.log(user);

//         users.findOne({name:'mari'})
//         .then((data)=>{
//             user.friends.push(data._id);
//             return user.save();
//         }).then((user)=>{
//             console.log(user);
//         }).then(() => {
//             return mongoose.connection.close();
//         }).catch((err)=>{
//             console.log(err);
//         });

//         // return users.findByIdAndUpdate(user._id,{
//         //     $set:{password:'smartsmart'}
//         // },{
//         //     new: true
//         // }).exec();
//     }).catch((err)=>{
//         console.log(err);
//     });
// });
