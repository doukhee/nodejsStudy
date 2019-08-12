const EventEmitter = require('events').EventEmitter;

const fs = require('fs');

/**
 * file read event
 * 
 * @param {any} files 
 * @param {any} regex 
 * @returns 
 */
module.exports = function findPattern(files, regex){
    //emitter 객체 생성
    const emitter = new EventEmitter();
    /**
     * file 배열에 있는 값 읽어 오기
     */
    files.forEach(function(file){
        /**
         * file 읽기
         */
        fs.readFile(file, 'utf8', (err, content)=>{
            if(err){
                /**  에러 발생시 파일 이름 반환 */
                return emitter.emit('error', file);
            }
            /** 파일을 읽고 있을 때 발생하는 이벤트 */
            emitter.emit('fileread', file);
            let match;
            /** 파일에서 정규식과 매치 되는 경우 */
            if(match = content.match(regex)){
                /** 정규식에 존재하는 경우 이벤트 생성 */
                match.forEach(elem=>{emitter.emit('found', file, elem)});
            }
        });
    });
    /** 이벤트 객체 반환 */
    return emitter;
}