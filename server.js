// Inicialización
var express  = require('express');
var app      = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');				// Utilizamos express
var morgan = require('morgan');
var mongoose = require('mongoose'); 				// mongoose para mongodb
var port  	 = process.env.PORT || 9000; 			// Cogemos el puerto 8080


// Configuracion
mongoose.connect('mongodb://localhost:27017/MainProject'); 	// Hacemos la conexión a la base de datos 
//de Mongo con nombre "MeanExample"

app.use(express.static(__dirname + '/angular')); 		
app.use(morgan('dev')); 			// activamos el log en modo 'dev'
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

// Cargamos los endpoints
require('./routes/mainRoute.js')(app);

// Cogemos el puerto para escuchar
app.listen(port);
console.log("APP por el puerto " + port);