const router = require("express").Router();
const UserCredentials = require("../models/users_credentials_views_model");
const brcypt = require("bcryptjs");

const generateJWTToken = require("../auth").generateJWTToken;
const authenticateJWTToken = require("../auth").authenticateJWTToken;

router.get("/specificUserCredentials", async(req,res)=>{

    var user = UserCredentials.findOne({username:req.query.username}).exec();
    if(user)
    {
        res.status(200).send(user);
    }
    else
    {
        res.status(500).send('Cannot get user');
    }
})


router.post("/login", async (req,res)=>{
    var user = UserCredentials.findOne({username:req.body.username}).exec();
    if(user)
    {
        if(brcypt.compareSync(req.body.password, user.password))
        {
            var token = generateJWTToken(req.body.username);
            res.status(200).send({token});
        }
        else
        {
            res.status(400).send('username and password do not match');
        }
    }
    else
    {
        res.status(400).send('This user doesnt not exist');
    }
})

router.post("/createNewUserCredentials", (req,res)=>{

    req.body.password = brcypt.hashSync(req.body.password,10);
    UserCredentials.create(req.body, (err,result)=>{
        if(err)
        {
            res.status(500).send('Cannot create user credentials ' + err);
        }
        else
        {
            res.status(200).send(result);
        }
    })
})


router.put("/updateUserCredentials", (req,res)=>{
    UserCredentials.updateOne({username:req.body.username}, {password:req.body.password}, (err,result)=>{

        if(err)
        {
            res.status(500).send('Update of user failed ' + err);
        }
        else
        {
            res.status(200).send(result);
        }
    })
})


router.delete("/deleteUserCredentials", (req,res)=>{
    UserCredentials.deleteOne({username:req.query.username},(err,result)=>{
        if(err)
        {
            res.status(500).send('delete of user failed ' + err);
        }
        else
        {
            res.status(200).send(result);
        }
    })
})


module.exports = router;