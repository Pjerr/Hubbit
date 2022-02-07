const mongoose = require("mongoose");

const conversations_model = new mongoose.Schema(

    {
        
        member1 : {type : String},
        member2 : {type : String}
        
    },
    {timestamps : true}
);


module.exports = mongoose.model("conversations",conversations_model);