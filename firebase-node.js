var Firebase = require('firebase');
var os = require('os');
var hostname = os.hostname();

var dataRef = new Firebase('https://hatio-node.firebaseIO.com/hosts/'+hostname);
var now = new Date();

var info = {
	'network-interfaces': os.networkInterfaces(),
	'name': os.hostname(),
	'logged-at': now.toString()
};

dataRef.set(info, function() { process.exit(1); });
