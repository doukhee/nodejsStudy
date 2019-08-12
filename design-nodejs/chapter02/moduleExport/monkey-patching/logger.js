function Logger(name){
    this.count = 0;
    this.name = name;
}

Logger.prototype.log = function(message){
    this.count++;
    console.log('['+this.name+'] '+message);
};
/**
 * instance export
 */
module.exports = new Logger('DEFAULT');

/**
 * 모듈이 캐시되기 때문에 logger 모듈을 필요로 하는 모든 모듈들은 실제로
 * 항상 동일한 객체의 인스턴스를 검색하며 상태를 공유한다.
 * 인스턴스 자체뿐만 아니라 인스턴스를 생성하는데 사용되는 생성자를 노출하는 것으로 구성됩니다.
 * 이를 통해 사용자는 동일한 객체의 새 인스턴스를 만들거나 필요에 따라 확장 가능 하다.
 * 인스턴스에 새로운 속성을 부여하는 것이다.
 */
module.exports.newLogger = Logger;