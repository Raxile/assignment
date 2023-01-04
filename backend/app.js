const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const HttpError = require('./models/http-error');
const informationRoutes = require('./routes/information-routes')

const url = 'mongodb+srv://winnerx:ioK3EZ6ms147DI7M@clusterop.c1zvgx2.mongodb.net/test?authSource=admin&replicaSet=atlas-496jqv-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

const app = express();

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-Type,Accept,Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE');
    next();
});

app.use('/api',informationRoutes)

  app.use((req,res,next)=>{
    const error = new HttpError('Could not find this route',404);
    throw (error);
});

mongoose.connect(url).then(()=>{
    app.listen(5000);
    console.log(`mongo connected successfully`); 
}).catch(
    (err)=>{
        console.log(err);
    }
)

