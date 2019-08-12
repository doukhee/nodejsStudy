const fs = require('fs');

function readJSONThrows(filename, callback){
    fs.readFile(filename, 'utf8', (err, data)=>{
        if(err){
            return callback(err);
        }
        callback(null, JSON.parse(data));
    });
}
/** this error not catch because not same stack. */
try{
    readJSONThrows('nonJSON.txt', err=>console.log(err));
}catch(err){
    console.log('This will not catch the JSON parsing exception');
}

/** uncaughtException handling */
process.on('uncaughtException', (err)=>{
    console.error('This will catch at last the '+
    'JSON parsing exception : '+err.message);
    process.exit(1);
})