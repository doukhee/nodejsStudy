const numbers = [2, 6, 7, 8, 1];
/*
const even = numbers.filter(function(x){
    if(x % 2 === 0){
        return x;
    }
});
*/
const even = numbers.filter(x=>x%2 === 0);



console.log('even get data ::: ', even);
/*
function filtering(x){
    if(x % 2 === 0){
        console.log(x+' is even !');
        return true;
    }
}
*/
const evenFunc = numbers.filter(x=>{
    if(x%2 === 0){
        console.log(x+' is even !');
        return true;
    }
});

/**
 * It is Setting Class ?
 * 
 * @param {any} name 
 */
function DelayGreeter(name){
    this.name = name;
}
/**
 * It is Class function
 */
DelayGreeter.prototype.greet = function(){
    setTimeout(function cb(){
        console.log('hello '+this.name);
    }, 500);
};
/**
 * It it Class function 
 * this is setting delay name 
 */
DelayGreeter.prototype.greet2 = function(){
    setTimeout(function cb(){
        console.log('hello '+this.name);
    }.bind(this), 500);
};

/**
 * It it Class function
 * this is setting bind name after call 
 * same greet2 
 */
DelayGreeter.prototype.greet3 = function(){
    setTimeout(()=>{
        console.log('hello '+this.name);
    }, 500);
};

const greeter = new DelayGreeter('World');

greeter.greet();

greeter.greet2();

greeter.greet3();