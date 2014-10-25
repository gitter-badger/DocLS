var vows = require('vows'),
    assert = require('assert'),
    parsing = require('../lib/parsing.js');

vows.describe("Generate tokens from source lines array").addBatch({
  'Get source lines in a string array': {
     topic: ["#Hola mundo!","# adios mundo!", "  # bah, me da igual", "Todo OK", "Another aspects"],
     "and get positon of the last comment": function (array) {
        IndexandCode = parsing.consumeComment(array, 0);
        assert.equal(IndexandCode[0], 3);
     },
     "and get a code block concatenated with the character newline": function (array) {
        IndexandCode = parsing.consumeComment(array, 0);
        assert.equal(IndexandCode[1], "#Hola mundo!\n# adios mundo!\n  # bah, me da igual\n");
     }
  }
}).export(module);
