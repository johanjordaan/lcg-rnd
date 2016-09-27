"use strict";

var _ = require('underscore');
var should = require('chai').should();
var expect = require('chai').expect;

var rnd = require('../lcg-rnd');

var sampleCount = 10000;

describe('lcg-rnd', () => {
	describe(' - _rand : ', () => {
	   it('should return a random number as a large int', (done) => {
			_.each(_.range(sampleCount),(i) => {
				var r = rnd._rand();
				expect(r).to.be.at.least(10000);
			});
	      done();
	   });
	});

	describe(' - random : ', () => {
	   it('should return a random number between 0 and 1', (done) => {
			_.each(_.range(sampleCount),(i) => {
				var r = rnd.random();
				expect(r).to.be.at.least(0);
				expect(r).to.be.most(1);
			});
	      done();
	   });
	});

	describe(' - rndFloatBetween : ', () => {
	   it('should return a random float number bewteen min and max', (done) => {
			_.each(_.range(sampleCount),(i) => {
				var r = rnd.rndFloatBetween(-90,40);
				expect(r).to.be.at.least(-90);
				expect(r).to.be.most(40);
			});
	      done();
	   });
	});

	describe(' - rndIntBetween : ', () => {
	   it('should return a random int number bewteen min and max', (done) => {
			_.each(_.range(sampleCount),(i) => {
				var r = rnd.rndIntBetween(-20,30);
				expect(r).to.be.at.least(-20);
				expect(r).to.be.most(30);
			});
	      done();
	   });
	});

	describe(' - srand : ', () => {
		it('should set the seed and return the same number sequence', (done) => {
			var a = [];
			var b = [];

			rnd.srand(99);
			_.each(_.range(sampleCount),(i)=>{
				a.push(rnd._rand());
			})

			rnd.srand(99);
			_.each(_.range(sampleCount),(i)=>{
				b.push(rnd._rand());
			})

			_.each(_.range(sampleCount),(i)=>{
				a[i].should.equal(b[i]);
			})
			done();
		});
	});


	describe(' - testing interface : ', () => {
		describe(' - fix a single value : ', () => {
			it('',(done)=>{
				rnd._fixRandomValue(10);
				rnd.random().should.equal(10);
				rnd.random().should.not.equal(10);
				done();
			});
		});
		describe(' - fix a range of values : ', () => {
			it('',(done)=>{
				rnd._fixRandomValues([10,-90,3]);
				rnd.random().should.equal(10);
				rnd.random().should.equal(-90);
				rnd.random().should.equal(3);
				rnd.random().should.below(1);
				done();
			});
		});
		describe(' - restore : ', () => {
		});
	});

});
