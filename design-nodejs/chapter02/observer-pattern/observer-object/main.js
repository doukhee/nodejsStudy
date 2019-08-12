const FilePattern = require('./objFindPattern');
const findPatternObject = new FilePattern(/hello \w+/);

findPatternObject
    .addFile('fileA.txt')
    .addFile('fileB.json')
    .find()
    .on('found', (file, match)=>{  console.log(`Match "${match}" in file ${file}`)})
    .on('error', (err)=>{console.log(`Error emitted ${err.message}`)});

    