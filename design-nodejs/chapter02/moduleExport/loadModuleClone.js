"use strict";

/**
 * module.exports는 함수 인스턴스 또는 문자열과 같은 객체 리터럴 이외의 것을 
 * 내보낼 수 있다.
 * exports는 참조하는 객체에만 새로운 속성을 추가할 수 있다. 
 * exports 변수의 재할당은 module.exports의 내용을 변경하지 않기 때문에 
 * 아무런 효과가 없다. 
 */

const fs = require('fs');

//save the original require
let originalRequire = require;

function loadModule(filename, module, require){
    const wrappedSrc = `(function(module, exports, require){
        ${fs.readFileSync(filename, 'utf8')}
    })(module, module.exports, require);`;
    eval(wrappedSrc);
}

var require = (moduleName)=>{
    console.log(`Require invoked for module:${moduleName}`);
    const id = require.resolve(moduleName);
    if(require.cache[id]){
        return require.cache[id].exports;
    }
    const module = {
        exports:{},
        id:id
    };

    require.cache[id] = module;

    loadModule(id, module, require);

    return module.exports;
};

require.cache = {};
require.resolve =  (moduleName)=>{
    /* moduleName module id check */
    return originalRequire.resolve(moduleName);
};

require(process.argv[2]);