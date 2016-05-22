var express = require('express')
var app = express()

//configuring static files
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

app.get('/burger', function(req, res) {
	res.sendFile(__dirname + '/views/burger.html')
})

//set up port
app.listen(3000, function(){
	console.log('Sample App running on port 3000')
})