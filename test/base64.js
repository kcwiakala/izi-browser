'use strict';

var expect = require('chai').expect;
var base64 = require('../index').base64;

describe('base64', () => {

  it('Should properly encode to base64 buffer', () => {
    var input = 'Test string number 1';
    expect(base64.encode(input)).to.equal(new Buffer(input).toString('base64'));

    input = 'Some other test string';
    expect(base64.encode(input)).to.equal(new Buffer(input).toString('base64'));

    input = 'Even different text';
    expect(base64.encode(input)).to.equal(new Buffer(input).toString('base64'));
  });

  it('Should properly decode base64 buffer', () => {
    var input = 'Test string number 1';
    expect(base64.decode(new Buffer(input).toString('base64'))).to.equal(input);

    input = 'Some other test string';
    expect(base64.decode(new Buffer(input).toString('base64'))).to.equal(input);

    input = 'Even different text';
    expect(base64.decode(new Buffer(input).toString('base64'))).to.equal(input);
  });

  it('Should handle empty inputs', () => {
    expect(base64.encode('')).to.equal('');
    expect(base64.decode('')).to.equal('');
  });

  it('Should encode and decode strings', () => {
    const input = 'Some text to be encoded';
    const encoded = base64.encode(input);

    expect(encoded).to.not.equal(input);

    const decoded = base64.decode(encoded);
    expect(decoded).to.equal(input);
  });

  it('Should throw error on invalid base64 input', () => {
    const input = 'daljlkj3lkj3lk43enngdflkgn';
    expect(base64.decode.bind(input)).to.throw(Error);
  });
});
