var express = require('express'),
	kakuen = require('kakuen'),
	server = express(),
	moker = kakuen.mocker;


server.use(moker);
server.listen(8000);
console.log("mockup api is running at http://localhost:8000");