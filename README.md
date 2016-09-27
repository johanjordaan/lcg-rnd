lcg-rnd ![Travis CI Status](https://api.travis-ci.org/johanjordaan/lcg-rnd.svg?branch=master "Travis CI Status")
=======

LCG (linear congruential generator) random number generator. Based on the information here: [http://en.wikipedia.org/wiki/Linear_congruential_generator].

`npm install lcg-rnd`

or

`bower install lcg-rnd`

Usage
========


```javascript
var rnd = require('lcg-rnd');
var rnd.srand(10);

var zertoToOne = rnd.random();
var floatVal = rnd.rndFloatBetween(-90.44,99.09);
var intVal = rnd.rndIntBetween(1,10);
```

Test Functions
```javascript
rnd._fixRandomValue(10);
rnd._fixRandomValues([10,20,40]);
rnd_.restore();
```
