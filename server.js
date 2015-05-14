var express = require('express');

var env = process.env.NODE_ENV || 'dev';
var port = 8080;

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.get('*', function(req, res) {
    res.render('index');
});

app.listen(port, function() {
    console.log('Listening on port: ' + port);
});