var rnd, _;

rnd = {
  lcg_parm: {
    seed: new Date().getTime(),
    a: 1103515245,
    c: 12345,
    m: Math.pow(2, 31)
  },
  srand: function(seed) {
    return this.lcg_parm.seed = seed;
  },
  rand: function() {
    this.lcg_parm.seed = (this.lcg_parm.a * this.lcg_parm.seed + this.lcg_parm.c) % this.lcg_parm.m;
    return this.lcg_parm.seed;
  },
  random: function() {
    return this.rand() / this.lcg_parm.m;
  },
  rnd: function() {
    return this.random();
  },
  rnd_float_between: function(min, max) {
    var delta, r;
    r = this.rnd();
    delta = max - min;
    return min + delta * r;
  },
  rnd_int_between: function(min, max) {
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
  },
  _saved: this.random,
  fix_value: function(value) {
    var _saved;
    _saved = this.random;
    return this.random = function() {
      return value;
    };
  },
  restore: function() {
    return this.random = _saved;
  }
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
