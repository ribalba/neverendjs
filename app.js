var express = require('express')
var app = express()
var fs = require('fs')

app.get('/', function(req, res) {  
    var fd = fs.openSync('/dev/urandom', 'r')  var bufferSize = 1024 
    var buffer = new Buffer(bufferSize)  var read  
    while ((read = fs.readSync(fd, buffer, 0, bufferSize, null)) !== 0) { 
        res.write(buffer.toString('utf8', 0, read), 'utf8') 
    } 
}) 

var port = process.env.PORT || 8000

var server = app.listen(port, function() {
    var host = server.address().address

    console.log('Example app listening at http://%s:%s', host, port)
});
