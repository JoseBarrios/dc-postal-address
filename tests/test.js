'use strict'

var assert = require('assert');
var PostalAddress = require('../index.js');

var model = {};
model.givenName = 'Jose';
model.familyName = 'Barrios'
let postalAddress = new PostalAddress(model);

describe('PostalAddress\n', function() {
  describe('Static Methods:', function() {
    describe('PostalAddress.isNumber', function() {
      it('should ...', function() {
        assert.equal(PostalAddress.isNumber(1), true);
      });
    });
  });
});
