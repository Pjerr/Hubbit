const router = require("express").Router();
const UserCredentials = require("../models/users_credentials_views_model");
const UsersAlgorithmView = require('../models/users_algorithm_views_model');
const UserVisitsProfileModel = require("../models/users_visit_profile_view_model");
const UserRecommendedViews = require("../models/users_recommended_views_model");
const UserRelationship = require("../models/users_relationships_views_model");
const UserSearch = require("../models/users_search_views_model");



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


router.post("/login",(req,res)=>{
    var user = UserCredentials.findOne({username:req.body.username}).exec();
    if(user)
    {
        if(brcypt.compareSync(req.body.password, user.password))
        {
            var token = generateJWTToken(req.body.username);
            res.status(200).send({username:user.username, token});
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
    UserCredentials.create({username: req.body.username,email:req.body.email, password:req.body.password}, (err,result)=>{
        if(err)
        {
            res.status(500).send('Cannot create user credentials ' + err);
        }
        else
        {
            var token = generateJWTToken(result.username);
            //res.status(200).send({result, token });
            
            var algoObject = {username:req.body.username,
                              gender : req.body.gender,
                              listGenders : req.body.listGenders,
                              listInterests : req.body.listInterests,
                              listTurnOns : req.body.listTurnOns,
                              listTurnOffs : req.body.listTurnOffs,
                              longDistance : req.body.longDistance,
                              listPrefLoc : req.body.listPrefLoc,
                              location : req.body.location

                             };
            createUserAlgorithmView(algoObject);

            var recommendedObject = {
                                    username:req.body.username,
                                    dob:req.body.dob,
                                    aboutMe : req.body.aboutMe,
                                    profilePic : req.body.profilePic,
                                    gender : req.body.gender,
                                    listMatchedInterests : [],
                                    location : req.body.location
                        
                                    };
            createRecommendedView(recommendedObject);

            var relationshipObject = {
                                    username:req.body.username,
                                    listContacts : [],
                                    listBlocked : [],
                                    listLeftSwipes : [],
                                    listRightSwipes : []
            }

            createRelationshipView(relationshipObject);

            var searchObject = {
                            username:req.body.username,
                            fullName:req.body.fullName,
                            dob : req.body.dob,
                            profilePic : req.body.profilePic,
                            gender : req.body.gender,
                            location : req.body.location
            }

            createSearchView(searchObject);

            var profileViewObject = {
                            username:req.body.username,
                            fullName : req.body.fullName,
                            dob:req.body.dob,
                            aboutMe:req.body.aboutMe,
                            profilePic:req.body.profilePic,
                            gender : req.body.gender,
                            listGenders : req.body.listGenders,
                            listInterests : req.body.listInterests,
                            listTurnOns : req.body.listTurnOns,
                            listTurnOffs : req.body.listTurnOffs,
                            longDistance : req.body.longDistance,
                            listPrefLoc : req.body.listPrefLoc,
                            location : req.body.location
            }

            createVisitProfileView(profileViewObject);



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



function createUserAlgorithmView(userObject){
    UsersAlgorithmView.create(userObject,(err,result)=>{
        if(err) return false;
        else return true;
    })
}
function createRecommendedView(userObject){
    UserRecommendedViews.create(userObject,(err,res)=>{
        if(err) return false;
        else return true;
    })
}
function createRelationshipView(userObject){
    UserRelationship.create(userObject, (err,res)=>{
        if(err) return false;
        else return true;
    })
}
function createSearchView(userObject){
    UserSearch.create(userObject, (err,res)=>{
        if(err) return false;
        else return true;
    })
}
function createVisitProfileView(userObject){
    UserVisitsProfileModel.create(userObject,(err,res)=>{
        if(err) return false;
        else return true;
    })
}

module.exports = router;