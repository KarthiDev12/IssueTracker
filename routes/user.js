var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://10.240.151.26/company',['profile']);

//Get All Users
router.get('/users', function(req,res,next){   
    db.profile.find(function(err,tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);

    })
});

//get Single task
router.get('/task/:id', function(req,res,next){
    //res.send('TASK API')
    db.profile.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);

    })
});

//Save User
router.post('/user', function(req,res,next){
    console.log("Entered Save service");
    var user = req.body;
    console.log("user in service"+user.name);
    if(!user.name || !user.password || !user.email  ){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else{      
        db.profile.save(user,function(err,task){           
             if(err){           
            res.send(err);
           }             
           res.json(task);
        });
    }
  
});

// delte User
router.delete('/user/:id', function(req,res,next){
   console.log("Delteid"+mongojs.ObjectId(req.params.id));
    db.profile.remove({_id:mongojs.ObjectId(req.params.id)},function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);

    })
});


//Update User
router.put('/user/:id', function(req,res,next){
    var user = req.body;
    var updUser = {};
    if(!user.name || !user.password || !user.email  ){
     updUser.name = user.title;
     updUser.password = user.password;
     updUser.email = user.email;
     if(!user.skills){
       updUser.skills =  user.skills;
      }
      if(!user.project){
         updUser.project =  user.project; 
      }

    }
    if(!updUser){
         res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else{
      db.profile.update({_id:mongojs.ObjectId(req.params.id)},updUser,{},function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);

    })
    }
    //res.send('TASK API')
   
});


router.get('/task/:username/:password', function(req,res,next){
    //res.send('TASK API')
    db.profile.findOne({name:req.params.username,password:req.params.password},function(err,user){
        if(err){
            res.send(err);
        }
       //if(!user){
       //res.send({
       //  "error":"fail"
    // }); 
   //  }
        res.json(user);
    })
}); 
module.exports = router;