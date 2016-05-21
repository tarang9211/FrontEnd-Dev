var express = require('express')
var app = express()

//configuring static files
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

//set up port
app.listen(3000, function(){
	console.log('Sample App running on port 3000')
})