'use strict';

const a = require('./a');
const b = require('./b');

/** 나중에 호출된 것은 이미 가져왔기 때문에 false로 나타내어 진다. */
console.log(a);
console.log(b);
