const Logger = require('./es2015logger');

/**
 * singleton pattern 
 * 
 * @param {any} name 
 * @returns 
 */
function LoggerFactory(name){
    if(!(this instanceof Logger)){
        return new Logger(name);
    }
    this.name = name;
}

/**
 * nodejs 6 version부터 사용가능 
 * new.target은 모든 함수에서 사욯할 수 있는 메타 속성이며,
 * 함수가 new 키워드를 사용하여 호출된 경우 런타임 시에 true로 
 * 평가된다. 가독성이 더 높아진다.
 */
module.exports.ES2015 = function LoggerFactoryEs2015(name){
    if(!new.target){
        return new Logger(name);
    }
    this.name = name;
}

module.exports = LoggerFactory;
