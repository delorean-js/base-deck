'use strict';

var Deck = require('lib/deck');
require('bespoke-keys');
require('bespoke-loop');
require('bespoke-scale');

module.exports = Deck.create()
.push(require('./slides/title.md'))
.push(require('./slides/intro.md'))
.start(document.body, {
  keys: true,
  loop: true,
  scale: true
});
