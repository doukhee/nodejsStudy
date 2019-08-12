/**
 * 함수에 이름을 지어서 내 보내는 것
 * 하나의 네임 스페이스로 내보는 효과가 있다.
 * 모듈의 속성처렁 이용된다.
 * 불러온 모듈.함수 이름으로 사용이 된다.
 */
exports.info = (message)=>{
    console.log('info : ', message);
};

exports.verbose = (message)=>{
    console.log('verbose: '+message);
};  