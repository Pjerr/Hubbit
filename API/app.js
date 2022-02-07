const express = require("express");
const mongoose = require("mongoose");
const app = express();
const rootRouter = express.Router();

const UsersVisitProfileRouter = require('./routes/users_visit_profile_view');

rootRouter.use('/usersVisitProfile', UsersVisitProfileRouter);
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