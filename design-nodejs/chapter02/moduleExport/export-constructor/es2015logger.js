/**
 * es2015 version Logger prototype
 * new를 사용하지 않을 시에 호출에 대해 보호가 가능하다.
 * @class Logger
 */
class Logger{
    constructor(name){
        this.name = name;
    }

    log(message){
        console.log(`[${this.name}] ${message}`);
    }

    info(message){
        this.log(`info : ${message}`);
    }

    verbose(message){
        this.log(`verbose : ${message}`);
    }
};

module.exports = Logger;