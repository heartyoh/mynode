var Firebase = require('firebase');
var os = require('os');

var fleed_id = os.hostname();

var dataRef = new Firebase('https://hatio-track.firebaseIO.com/fleets/' + fleed_id);

setInterval(function() {
  var now = new Date();

  console.log("Time : " + now.getTime() + "\n");
  dataRef.set({
    time: now.getTime(),
    lat: 37.791,
    long: -122.079,
    speed: 102
  });
}, 60 * 1000);
