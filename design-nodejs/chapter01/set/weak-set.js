/** obj1 key is value instance set*/
let obj1 = {key:'val1'};
let obj2 = {key:'val2'};
/**It is Weak Set not support enum type only one time call */
const set = new WeakSet([obj1, obj2]);
console.log('set has checking value :: ', set.has(obj1));
obj1 = undefined;

console.log('set value ::: ', set);