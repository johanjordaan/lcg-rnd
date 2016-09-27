"use strict";

var should = require('chai').should();
var expect = require('chai').expect;

var rnd = require('../lcg-rnd');

describe('lcg-rnd', () => {
	describe(' - rand : ', () => {
	   it('should return a random number as a large int', (done) => {
	      console.log(rnd.rand());
	      done();
	   });
	});

	describe(' - random : ', () => {
	   it('should return a random number between 0 and 1', (done) => {
	      console.log(rnd.random());
	      done();
	   });
	});

	describe(' - rnd : ', () => {
	   it('should return a random number bewteen  0 and 1', (done) => {
	      console.log(rnd.rnd());
	      done();
	   });
	});

	describe(' - rndFloatBetween : ', () => {
	   it('should return a random float number bewteen min and max', (done) => {
	      console.log(rnd.rndFloatBetween(10,20));
	      done();
	   });
	});

	describe(' - rndIntBetween : ', () => {
	   it('should return a random int number bewteen min and max', (done) => {
	      console.log(rnd.rndIntBetween(-20,30));
	      done();
	   });
	});

	describe(' - srand : ', () => {
		it('should set the seed and return the same number sequence', (done) => {
			console.log(rnd.srand(10));
			done();
		});
	});


	describe(' - testing interface : ', () => {
		describe(' - fix a single value : ', () => {
		});
		describe(' - fix a range of values : ', () => {
		});
		describe(' - restore : ', () => {
		});
	});

});
