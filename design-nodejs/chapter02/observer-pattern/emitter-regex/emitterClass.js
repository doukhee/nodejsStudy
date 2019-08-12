const EventEmitter = require('events').EventEmitter;
const fs = require('fs');

/**
 * s2015 version class FindPattern
 * 
 * @class FindPatter
 * @extends {EventEmitter}
 */
class FindPatten extends EventEmitter{
    constructor(regex){
        super();
        this.regex = regex;
        this.files = [];
    }
    /**
     * 파일을 클래스 변수에 추가하는 함수
     * 
     * @param {any} file 
     * @returns 
     * 
     * @memberOf FindPatten
     */
    addFile(file){
        this.files.push(file);
        return this;
    }
    /**
     * 파일 리스트에 있는 파일 명을 찾아서 읽어서 이벤트 발생 하는 함수
     * 
     * @returns 
     * 
     * @memberOf FindPatten
     */
    find(){
        this.files.forEach(file=>{
            fs.readFile(file, 'utf8', (err, content)=>{
                if(err){
                    return this.emit('error', err);
                }
                this.emit('fileread', file);

                let match = null;

                if(match = content.match(this.regex)){
                    match.forEach(elem=>this.emit('found', file, elem));
                }
            });
        });
        return this;
    }
}

module.exports = FindPatten;