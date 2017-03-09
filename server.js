let express = require('express');
let path = require('path');
// let url = require('url');
let fs = require('fs');
// let bodyParser = require('body-parser');

let app = express();
let port = process.env.PORT || 8080;
// let urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(path.join(__dirname, '/')));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, function() {
    console.log('App is listening on port ' + port);
});
