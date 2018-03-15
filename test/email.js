'use strict';

var expect = require('chai').expect;
var email = require('../index').email;

describe('email', () => {

	it('Should accept valid emails', () => {
		expect(email.validate("izisoft@gmail.com")).to.equal(true);
		expect(email.validate("izisoft.admin.of.the.page@izisoft.com.pl")).to.equal(true);
		expect(email.validate("admin@[196.192.0.1]")).to.equal(true);
	});

	it('Should reject emails starting invalid characters', () => {
		expect(email.validate(" izisoft@gmail.com")).to.equal(false);
		expect(email.validate("<izisoft@gmail.com")).to.equal(false);
		expect(email.validate(">izisoft@gmail.com")).to.equal(false);
	});

	it('Should reject emails with invalid host', () => {
		expect(email.validate("izisoft@gmail")).to.equal(false);
		expect(email.validate("izisoft@127.0.0.0.1")).to.equal(false);
		expect(email.validate("izisoft@127.0.1")).to.equal(false);
	});
});
