//file module import
const fs = require('fs');
//get cache value
const cache = {};

//right use sync
function consistenceReadSync(filename){
    if(cache[filename]){
        return cache[filename];
    }else{
        cache[filename] = fs.readFileSync(filename, 'utf8');
        return cache[filename];
    }
}

/**
 * Deferred execution
 * 
 * @param {any} filename 
 * @param {any} callback 
 */
function consistenceReadAsync(filename, callback){
    if(cache[filename]){
        //process.nextTick same function is setImmediate()
        process.nextTick(()=>callback(cache[filename]));
    }else{
        //async function
        fs.readFile(filename, 'utf8', (err, data)=>{
            cache[filename] = data;
            callback(data);
        });
    }
}

function inconsistentRead(filename, callback){
    if(cache[filename]){
        //sync call
        callback(cache[filename]);
    }else{
        //async call
        fs.readFile(filename, 'utf8', (err, data)=>{
            cache[filename] = data;
            callback(data);
        });
    }
}

function createFileReader(filename){
    const listeners = [];
    inconsistentRead(filename, value=>{
        listeners.forEach(listener=>{listener(value)});
    });
    return {
        onDataReady:listener=>listeners.push(listener)
    };
    /**
      let value = consistenceReadSync(filename);
      listeners.forEach(listener=>listener(value));
      return {
      onDataReady:listener=>listeners.push(listener)}
     */
}

const reader1 = createFileReader('data.txt');
reader1.onDataReady(data=>{
    console.log('First call data : ', data);

    //delay few later retry read...
    const reader2 = createFileReader('data.txt');
    reader2.onDataReady(data=>{
        console.log('Second call data : ', data);
    });
});