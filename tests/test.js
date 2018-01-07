'use strict'

var assert = require('assert');
var PostalAddress = require('../index.js');

var model = {};
model.addressCountry = 'Canada';
model.addressLocality = 'Vancouver';
model.addressRegion = 'BC';
model.postOfficeBoxNumber  = 'POBOX123';
model.postalCode = 'V8W1L6';
model.streetAddress = '999 Yates St';
let postalAddress = new PostalAddress(model);

let key = {};

describe('PostalAddress\n', function() {
	describe('Instance Methods:', function() {
		describe('PostalAddress.isNumber()', function() {
			it('should return true if x is number', function() {
				assert.equal(PostalAddress.isNumber(1), true);
				assert.equal(PostalAddress.isNumber(''), false);
			});
		});
	});
});
