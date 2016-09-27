var rnd, _;

rnd = new function() {
   this.lcgParm = {
      seed: new Date().getTime(),
      a: 1103515245,
      c: 12345,
      m: Math.pow(2, 31)
   };

   this.srand =  (seed) => {
      return this.lcgParm.seed = seed;
   };

   this.rand = () => {
      this.lcgParm.seed = (this.lcgParm.a * this.lcgParm.seed + this.lcgParm.c) % this.lcgParm.m;
      return this.lcgParm.seed;
   };

   this.random = () => {
      return this.rand() / this.lcgParm.m;
   };

   this.rnd =  () => {
      return this.random();
   };

   this.rndFloatBetween = (min, max) => {
      var delta, r;
      r = this.rnd();
      delta = max - min;
      return min + delta * r;
   };

   this.rndIntBetween = (min, max) => {
      var count, i, prob, r, total_prob, _i, _len, _ref;
      count = max - min + 1;
      prob = 1 / count;
      total_prob = prob;
      r = this.rnd();
      _ref = _.range(count);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
         i = _ref[_i];
         if (r <= total_prob) {
            return min + i;
         } else {
            total_prob += prob;
         }
      }
      return min + count - 1;
   };


   // Functions to facilitate testing
   //
   this._saved = this.random;
   this._fixRandomValue = (value) => {
      this._fixRandomValues([value]);
   };
   this._fixRandomValues = (values) => {
      var values = values.reverse();
      this.random = () => {
         var value = values.pop();
         this._fixRandomValues(values.reverse());
         if(values.length === 0) {
            this.random = this._saved;
         }
         return value;
      };
   };
};

if (typeof module !== "undefined" && module !== null) {
  _ = require('underscore');
  module.exports = rnd;
}

if (typeof define !== "undefined" && define !== null) {
  define(['underscore'], function(_) {
    return rnd;
  });
}
