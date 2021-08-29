const express= require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const users = require('../models/users');

router.use(bodyParser.json());

router.post('/signup',(req,res,next)=>{
    users.findOne({name:req.body.username})
    .then((user)=>{
        if(user != null){
            var err = new Error('user '+req.body.username+'already exist!');
            err.status = 403;
            next(err);
        }else{
            return user.create({
                name:req.body.username,
                password: req.body.password,
                mail: req.body.mail,
                sockId: req.body.sockid,
                friends:[],
                active: {
                    isActive:false,
                    lastActive: new Date().toISOString()
                }
            });
        }
    })
    .then((user)=>{
        res.status = 200;
        res.setHeader('content-Type','application/json');
        res.json({status:'Registration Successful!',user:user});
    },(err)=>next(err))
    .catch((err)=> next(err));
})

router.post('/login',(req,res,next)=>{
    console.log(req.headers.authorization);
    if(!req.session.user){
        var authHeader = req.headers.authorization;
        if(!authHeader){
            var err = new Error('You are not authenticated');
            res.setHeader('www-Authenticate', 'Basic');
            err.status = 401;
            next(err);
            return;
        }
        
        var auth = new Buffer.from(authHeader.split(' ')[1],'base64').toString().split(':');
        var username =auth[0];
        var password = auth[1];
        console.log(username);
        console.log(password);

        users.findOne({name:username})
        .then((user)=>{
            console.log(user);
            if(user===null){
                var err= new Error('user'+username+'does not exist!');
                err.status = 403;
                return next(err);
            }else if(user.password !== password){
                var err = new Error('Your Password is incorrect!');
                err.status = 403;
                return next(err);
            }else if(user.name === username && user.password === password){

                users.findByIdAndUpdate(user._id,{
                    $set:{active:{isActive:true}}
                },{
                    new: true
                }).then((data)=>{
                    console.log(data);
                    req.session.status = 'authenticated';
                    req.session.user = data._id;
                    res.statusCode = 200;
                    res.setHeader('Content-Type','text/plain');
                    res.end('You are authenticated');
                })
            }
        }).catch((err)=>next(err));
    }else{
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('You are already authenticated!');
    }
})

router.get('/logout',(req,res)=>{
    if(req.session){
        users.findByIdAndUpdate(req.session.user,{
            $set:{active:{isActive:false,lastActive:new Date().toISOString()}}
        },{
            new: true
        }).then(()=>{
            req.session.destroy();
            res.clearCookie('session-id');
            res.statusCode = 200;
            res.setHeader('Content-Type','text/plain');
            res.end('logged out');
        })
        // res.redirect('/');
    }else{
        var err = new Error('You are not logged in!');
        err.status = 403;
        next(err);
    }
});

module.exports = router;