const express = require("express");
const mongoose = require("mongoose");
const app = express();
const rootRouter = express.Router();

const UsersVisitProfileRouter = require('./routes/users_visit_profile_view');
const ConversationsRouter = require('./routes/conversation');
const MessagesRouter = require('./routes/messages');
const AlgoUserRouter = require('./routes/users_algorithm_views');
const CredentialsUser = require('./routes/users_credentials_views');
const UserRecommendation = require('./routes/user_recommended_views');
const UserRelationships = require('./routes/user_relationship_views');
const UserSearch = require('./routes/user_search_views');
const Interests = require('./routes/interests_views');


rootRouter.use('/usersVisitProfile', UsersVisitProfileRouter);
rootRouter.use('/conversations', ConversationsRouter);
rootRouter.use('/messages',MessagesRouter);
rootRouter.use('/interests', Interests);
rootRouter.use('/usersAlgorithms', AlgoUserRouter);
rootRouter.use('/usersCredentials', CredentialsUser);
rootRouter.use('/usersRecommendation',UserRecommendation);
rootRouter.use('/usersRelationships', UserRelationships);
rootRouter.use('/usersSearch', UserSearch);
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use('/', rootRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log("Server is running on PORT 5000...."));

app.get('/', (req,res)=>{
    res.status(200).send('Server is up and running');
})

mongoose.connect(
    'mongodb://localhost:27017/hubbit',
    { useNewUrlParser: true, useUnifiedTopology: true },
    ()=>console.log('Connected to MongoDB/Hubbit on PORT 27017... ')
);