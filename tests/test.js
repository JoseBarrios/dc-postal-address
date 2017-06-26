'use strict'

var assert = require('assert');
var PostalAddress = require('../index.js');

var model = {};
model.addressCountry = 'Canada';
model.addressLocality = 'Victoria';
model.addressRegion = 'BC';
model.postOfficeBoxNumber  = 'POBOX123';
model.postalCode = 'V8W1L6';
model.streetAddress = '204-759 Yates St';
let postalAddress = new PostalAddress(model);

let key = {};
key.format = '204-759 Yates St\n        Victoria BC V8W1L6\n        Canada'

describe('PostalAddress\n', function() {
  describe('Instance Methods:', function() {
    describe('#format', function() {
      it('should return the formatted address', function() {
        assert.equal(postalAddress.formatted(), key.format);
      });
    });
  });
});
