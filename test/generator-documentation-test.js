var vows = require('vows'),
    assert = require('assert');

vows.describe("Generator documentation from LiveScript code").addBatch({
  'Read a line with a comment': {
      topic: "#Un nuovo inizio!",
      "and create a line of documentation": function (comment){
	  assert.equal(comment.substring(1, comment.lenght),"Un nuovo inizio!")
      }
  }

}).export(module);
