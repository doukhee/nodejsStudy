/** let value */
let obj = {};
/** It is Weak Map not support enum type only one time call */
const map = new WeakMap();
map.set(obj, {key:"some_value"});
console.log(map.get(obj));
obj = undefined;
