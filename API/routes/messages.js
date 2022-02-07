const router = require("express").Router();
const MessageModel = require("../models/messages_model");

//conversationId
//sender
//text
//all of this goes in req.body as is
router.post("/createNewMessage", (req,res)=>{

    MessageModel.create(req.body, (err,result)=>{
        if(err)
        {
            res.status(500).send('Message create failed');
        }
        else
        {
            res.status(200).send(result);
        }
    })
})

//get message by convo
router.get("/getMessagesByConversation", async (req,res)=>{

    const messages = await MessageModel.findOne({conversationId:req.body.conversationId}).exec();
    if(messages != null)
        res.status(200).send(messages);
    else
        res.status(500).send('Unable to get messages for convo');
})

module.exports = router;