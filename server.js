'use strict'

var express = require('express');

var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.listen('8081', function(){
	console.log('Server runing at http://localhost:8081 !!')
})

app.get('/',function(req,res){
	res.sendFile('main.html',{'root':__dirname + '/public'});
})
