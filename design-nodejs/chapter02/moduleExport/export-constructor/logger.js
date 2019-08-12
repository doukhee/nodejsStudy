/**
 * java script class function constructor
 * new를 사용하지 않을 시에 호출에 대해 보호가 가능하다.
 * @param {any} name 
 */
function Logger(name){
    this.name = name;
}

/**
 * Logger log function 
 */
Logger.prototype.log = function(message){
    console.log(`[${this.name}] ${message}`);
};

/**
 * Logger info function
 */
Logger.prototype.info = function(message){
    this.log(`info: ${message}`);
};

/**
 * Logger verbose function
 */
Logger.prototype.verbose = function(message){
    this.log(`verbose : ${message}`);
};

module.exports = Logger;