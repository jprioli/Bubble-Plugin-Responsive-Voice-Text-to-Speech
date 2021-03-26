function(properties, context) {

'use strict';

const fs = require('fs');

let data = properties.audioContent

let buff = new Buffer(data, 'base64');

var player = require('play-sound')

player.play('buff.Buffer', function(err){
  if (err) throw err
})





}