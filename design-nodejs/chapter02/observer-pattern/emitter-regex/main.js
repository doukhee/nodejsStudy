const EmitterTest = require('./emitter');


/**
 * input file name array and find pattern hello pattern reg
 * do event daisy chain handle 
 */
EmitterTest(['fileA.txt', 'fileB.json'], /hello\w+/g)
.on('fileread', file=>{console.log(file+' was read')})
.on('found', (file, match)=>console.log('Matched "'+match+'" in file '+file))
.on('error', err=>{console.log('Error emitted : '+err.message)});