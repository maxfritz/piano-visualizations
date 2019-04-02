var midi = require('midi'); // docs @ https://github.com/justinlatimer/node-midi

var input = new midi.input();

// print a list of available ports,
portcount = input.getPortCount();
for(var i=0;i<portcount; i++){
  input.getPortName(i);}

// callback with midi info whenever info is received
// mio: [on=144 | off = 128, note, velocity]

input.on('message', (d, message)=>{
  console.log(message)
});

// Open the first available input port.
input.getPortName(0)
input.openPort(0);
