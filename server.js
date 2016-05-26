var express 	= require('express');
var app 		= express();
var path 		= require('path');
var adminRotas 	= express.Router();

adminRotas.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

adminRotas.get('/caio', function(req, res) {
	res.sendFile(path.join(__dirname + '/caio.html'));
});

adminRotas.get('/clara', function(req, res) {
	res.send('fotos da clara');
});

adminRotas.get('/gabriel', function(req, res) {
	res.send('fotos da gabriel');
});
app.use('/fotos', adminRotas);

app.listen( process.env.PORT || 1337);
console.log('1337 is the magic port!');










