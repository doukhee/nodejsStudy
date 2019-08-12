/**
 * 최소한의 노출 원리와 가장 잘 맞는 패턴
 */
module.exports = (message)=>{
    console.log(`info: ${message}`);
};

/**
 * 단일 진입점의 명확성을 제공 
 * 이 방식을 응요하여 그 이상의 고급 유스케이스를 만들 수 있는 
 * 다른 부가적인 기능 노출 가능 
 * 한가지만 책임 지는 원칙
 */
module.exports.verbose = (message)=>{
    console.log(`verbose : ${message}`);
};