var express  = require('express'); 
var app      = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var mongoose = require('mongoose'); 
var port  	 = process.env.PORT || 3000;
// Configuracion
var options = {
  user: "vania",
  pass: "asdf"
};

var mongooseConnectionString = 'mongodb://jello.modulusmongo.net:27017/Ozyb5uru';
mongoose.connect(mongooseConnectionString, options);
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + mongooseConnectionString);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

app.use(express.static(__dirname + '/angular')); 		
app.use(morgan('dev')); 			
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override')); 

require('./routes/mainRoute.js')(app);

app.listen(port);
console.log("APP por el puerto " + port);