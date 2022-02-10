const router = require("express").Router();
const ConversationModel = require("../models/conversations_model");


router.post("/createNewConversation", (req,res)=>{

    var smallerIdUser;
    var biggerIdUser;
    if(req.body.member1 > req.body.member2)
    {
        smallerIdUser = req.body.member2;
        biggerIdUser = req.body.member1;
    }
    else
    {
        smallerIdUser = req.body.member1;
        biggerIdUser = req.body.member2;
    }
    ConversationModel.create({member1 :smallerIdUser, member2 : biggerIdUser},(err,result)=>{
        if(err)
        {
            res.status(500).send('Error with new convo ' + err);
        }
        else
        {
            res.status(200).send(result);
        }
    })
})

//get all user convos for one user
router.get("/getSpecificUserConvo", (req,res)=>{
    convo = await ConversationModel.find({$or:[{'member1':req.body.username}, {'member2':req.body.username}]}).exec();
    if(convo != null)
        res.status(200).send(convo);
    else
        res.status(500).send("Nece get convo");    

})


//get specific convo between 2 users
//DONT FORGET TO SORT THEM BEFORE GET REQUEST ON FRONTEND, member1 is lesser of two Ids
router.get("/getConvoForBothUsers", (req,res)=>{
    convo = await ConversationModel.find({$and:[{'member1':req.body.member1}, {'member2':req.body.member2}]}).exec();
    if(convo != null)
        res.status(200).send(convo);
    else
        res.status(500).send("Nece get convo");    

})
module.exports = router;