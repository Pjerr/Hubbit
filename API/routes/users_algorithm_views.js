const router = require("express").Router();
const UsersAlgorithmView = require('../models/users_algorithm_views_model');


router.get("/", async(req,res)=>{
    try{
        allAlgoUsers = await UsersAlgorithmView.find({});
        res.status(200).send(allAlgoUsers);
    }
    catch(err){
        res.status(500).send('Error algo users');
    }
})

router.post("/createNewAlgoUsers", (req,res)=>{

    UsersAlgorithmView.create(req.body, (err,result)=>{
        if(err)
        {
            res.status(500).send('user algo create failed ' + err);
        }
        else
        {
            res.status(200).send(result);
        }
    })
})


router.delete("/deleteAlgoUser", (req,res)=>{

    UsersAlgorithmView.deleteOne({username:req.query.username},(err,result)=>{
        if(err)
        {
            res.status(500).send('Delete algo user failed ' + err);
        }
        else
        {
            res.status(200).send('Delete successful');
        }
    })
})


module.exports = router;