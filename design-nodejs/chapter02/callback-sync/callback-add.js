/**
 * syncs funciton add
 * 
 * @param {any} a 
 * @param {any} b 
 * @returns 
 */
function add(a, b){
    return a+b;
}
/**
 * use callback function add
 * 
 * @param {any} a 
 * @param {any} b 
 * @param {any} callback 
 */
function addCallback(a, b, callback){
    callback(a+b);
}

console.log('before');
addCallback(1, 2, result=>console.log('result ::: ', result));
console.log('after');

console.log('testing async');

/** set Time out delay 100 */
function additionAsync(a, b, callback){
    setTimeout(()=>callback(a+b), 100);
};

console.log("before");
additionAsync(1, 2, result=>console.log('async result :: ' , result));
console.log('after');