const express= require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const users = require('../models/users');

router.use(bodyParser.json());

router.get('/',(req,res,next)=>{
    if(!req.session.user){
        var err = new Error('You are not authenticated!');
        err.status = 403;
        return next(err);
    }else{
        users.findById(req.session.user)
        .then((user)=>{
            const contact=user.friends;
            let responsejson=[];
            let i=0;
            
            findcontacts(contact[i])
            
            function findcontacts(con){
                users.findById(con)
                .then((user)=>{
                    
                    responsejson.push({name:user.name,sockId:user.sockId,isactive:user.active.isActive,lastseen:user.active.lastActive});
                    if(i<contact.length-1)
                        findcontacts(contact[++i]);
                    else{
                        res.statusCode=200;
                        res.setHeader('content-type','application/json');
                        res.json(responsejson);
                    }
                })
            }

        }).catch((err)=>next(err));
    }
})

router.post('/mysocket',(req,res,next)=>{
    if(!req.session.user){
        var err = new Error('You are not authenticated!');
        err.status = 403;
        return next(err);
    }else{
        users.findByIdAndUpdate(req.session.user,{
            $set:{sockId:req.body.sockId}
        },{
            new: true
        }).then(()=>{
            res.status = 200;
            res.setHeader('Content-Type','text/plain');
            res.end('sucessfully updated socketId');
        })
    }
})

router.post('/contactinfo',(req,res,next)=>{
    if(!req.session.user){
        var err = new Error('You are not authenticated!');
        err.status = 403;
        return next(err);
    }else{
        users.findById(req.body.id)
        .then((user)=>{    
            res.status=200;
            res.setHeader('content-type','application/json');
            res.json({isactive:user.active.isActive,lastseen:user.active.lastActive,sockId:user.sockId});
        })
    }
})

module.exports = router;