var express = require('express'),
path = require('path'),
app = express(),
location = path.join(__dirname, '../bin');

app.use(express.static(location));
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: location})
});

var server = app.listen(process.env.PORT || 3001);
