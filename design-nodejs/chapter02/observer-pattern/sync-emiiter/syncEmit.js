
const EventEmitter = require('events').EventEmitter;
/**
 * event sync Testing class
 * 
 * @class SyncEmit
 * @extends {EventEmitter}
 */
class SyncEmit extends EventEmitter{
    constructor(){
        super();
        this.emit('ready');
    }
    
}
/**
 * event type function
 * 
 * @returns 
 */
function helloEvents(){
    const eventEmitter = new EventEmitter();
    setTimeout(()=>eventEmitter.emit('hello', 'hello world'), 100);
    return eventEmitter;
}
/**
 * callback type function
 * 
 * @param {any} callback 
 */
function helloCallback(callback){
    setTimeout(()=>callback('hello world'), 100);
}

/**
 * it is not working 
 */
const syncEmit = new SyncEmit();

syncEmit.on('ready',()=>console.log('Object is ready to be used'));