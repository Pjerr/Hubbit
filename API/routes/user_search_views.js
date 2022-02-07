const router = require("express").Router();
const { runInContext } = require("vm");
const UserSearch = require("../models/users_search_views_model");


router.get("/getSpecificUser", async(req,res)=>{
   
    if(req.query.searchMode = 'u')
    {
        var user = UserSearch.findOne({username:req.query.username}).exec();
        if(user)
        {
            res.status(200).send(user);
        }
        else
        {
            res.status(500).send('unable to get by username');
        }
    }
    else
    {
        if(req.query.searchMode = 'l')
        {
            var user = UserSearch.findOne({location:req.query.location}).exec();
            if(user)
            {
                res.status(200).send(user);
            }
            else
            {
                res.status(500).send('unable to get by location');
            }
        }
        else
        {
            var user = UserSearch.find({ fullName: req.query.fullName }).collation({ locale: "en", strength: 2 }).exec();
            if(user)
            {
                res.status(200).send(user);
            }
            else
            {
                res.status(500).send('unable to get by fullName');
            }
        }
    }
})


router.post("/createNewSearchUser", (req,res)=>{
    UserSearch.create(req.body, (err,result)=>{
        if(err)
        {
            res.status(500).send('Unable to create new search user ' + err);
        }
        else
        {
            res.status(200).send(result);
        }
    })
})


router.delete("/deleteSearchUser",(req,res)=>{
    UserSearch.deleteOne({username:req.query.username}, (err,result)=>{
        if(err)
        {
            res.status(500).send('Unable to delete search user ' + err);
        }
        else
        {
            res.status(200).send(result);
        }
    })
})


module.exports = router;