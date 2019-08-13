"use strict";

function asyncOperation(callback){
    process.nextTick(callback);
}

function task1(callback){
    asyncOperation(()=>{
        console.log('task1 called');
        task2(callback);
    });
}

function task2(callback){
    asyncOperation(()=>{
        console.log('task2 called');
        task3(callback);
    });
}

function task3(callback){
    asyncOperation(()=>{
        /* finally executes the callback */
        console.log('task3 called');
        callback(); 
    });
}

task1(()=>{
    console.log('task1, 2 and 3 executed');
})