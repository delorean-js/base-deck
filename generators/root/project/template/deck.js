'use strict';

var Deck = require('lib/deck');
require('bespoke-loop');
require('bespoke-scale');

module.exports = Deck.create(document.body)
.push('a')
.push('b')
.start({
  loop: true,
  scale: true
});
