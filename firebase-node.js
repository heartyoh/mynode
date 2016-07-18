var firebase = require('firebase');
var os = require('os');
var hostname = os.hostname();

var config = {
    databaseURL: "https://hatio-node.firebaseio.com"
};

var dataRef = firebase.initializeApp(config).database().ref('/hosts/' + hostname);

var now = new Date();

var info = {
	'network-interfaces': os.networkInterfaces(),
	'name': os.hostname(),
	'logged-at': now.toString()
};

dataRef.set(info, function() { process.exit(1); });
