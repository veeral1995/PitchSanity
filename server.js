// silly chrome wants SSL to do screensharing
var fs = require('fs'),
    express = require('express'),
    https = require('https'),
    http = require('http');


var privateKey = fs.readFileSync('fakekeys/privatekey.pem').toString(),
    certificate = fs.readFileSync('fakekeys/certificate.pem').toString();


var app = express();

app.use(express.static(__dirname));

https.createServer({key: privateKey, cert: certificate}, app).listen(8000);
http.createServer(app).listen(process.env.PORT || 3000);

console.log('running on https://localhost:3000');
