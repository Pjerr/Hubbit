const router = require("express").Router();
const UserVisitsProfileModel = require("../models/users_visit_profile_view_model");

router.get("/", async(req,res)=>{
    
    try{
        allUsers = await UserVisitsProfileModel.find({});
        res.status(200).send(allUsers);
    }
    catch(err)
    {
        res.status(500).send('Error with getUsers ' + err )
    }
})

router.get("/searchByUsername", async(req,res)=>{
    user = await UserVisitsProfileModel.findOne({username: req.query.username}).exec();
    if(user != null)
        res.status(200).send(user);
    else
        res.status(500).send("Nece get username");    
})

router.post("/createNewUserProfileView",(req,res)=>{

    UserVisitsProfileModel.create(req.body,(err,newUser)=>{
        if(err)
        {
             res.status(500).send("user creation failed");
        }
        else {
            res.status(200).send(newUser);
        }
    })
})


router.put("/updateUserProfile", (req,res)=>{
    UserVisitsProfileModel.updateOne({username : req.body.username}, {aboutMe : req.body.aboutMe}, (err,result)=>{
        if(err)
        {
             res.status(500).send("user update failed");
        }
        else {
            res.status(200).send(result);
        }
    })
})


router.delete("/deleteUser", (req,res)=>{

    UserVisitsProfileModel.deleteOne({username : req.query.username}, (err,result)=>{
        if(err)
        {
            res.status(500).send('Delete of user failed');
        }
        else{
            res.status(200).send('Delete successful');
        }
    })
})

module.exports = router;