var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
mongoose = require('mongoose'),
bodyParser = require('body-parser');

//Importing Models

Character = require('./api/models/characterListModels'),

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/streetfighterdb', { useNewUrlParser: true },);


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/characterListRoutes')
routes(app);

app.listen(port);

console.log('Street Fighter RESTful API server started on: ' + port);