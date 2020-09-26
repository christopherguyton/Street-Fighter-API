//Dependencies

var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
mongoose = require('mongoose'),
bodyParser = require('body-parser');

//Importing Routes
const initRoutes = require("./api/routes/web");
app.use(express.urlencoded({ extended: true }));
initRoutes(app);
var characterRoutes = require('./api/routes/characterListRoutes')
characterRoutes(app);



//Importing Models

Character = require('./api/models/characterListModels'),

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/streetfighterdb', { useNewUrlParser: true , useUnifiedTopology: true }, err => { 
    console.log('connected') 
});


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.listen(port);

console.log('Street Fighter RESTful API server started on: ' + port);