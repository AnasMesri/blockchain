const crypto = require('crypto');
const Swarm = require('discovery-swarm');
const defaults = require('dat-swarm-defaults');
const getPort = require('get-port');

// variables to hold an object with the peers and connection sequence
const peers = {};
let connSeq = 0;

//channel name that all your nodes will be connecting to
let channel = 'PiuPiu';

const myPeerId = crypto.randomBytes(32);
console.log('myPeerId: ' + myPeerId.toString('hex'));

//a config object that holds peers ID
const config = defaults({
    id: myPeerId,
});

//Sarm library using config as objecct
const swarm = Swarm(config);

(async () => {
    //listen on the random port selected
})