const request = require('request');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const utilities = require('./utilities');


/**
 * function save file module
 * 
 * @param {any} url 
 * @param {any} callback 
 */
function saveFile(filename, contents, callback){
    mkdirp(path.dirname(filename), err=>{
        if(err){
            return callback(err);
        }
        fs.writeFile(filename, contents, callback);
    });
}

/**
 * file down load module
 * 
 * @param {any} url 
 * @param {any} filename 
 * @param {any} callback 
 */
function download(url, filename, callback){
    console.log(`Downloading url : ${url}`);
    request(url, (err, response, body)=>{
        if(err){
            return callback(err);
        }
        /**
         * closure using this function
         */
        saveFile(filename, body, err=>{
            if(err){
                return callback(err);
            }
            console.log(`Downloaded and saved : ${url}`);
            callback(null, body);
        });
    });
}

/**
 * web crawling input url callback(err, filename, flag)
 * 
 * @param {any} url 
 * @param {any} callback 
 */
function spider(url, callback){
    const filename = utilities.urlToFilename(url);
    fs.exists(filename, exists=>{
        if(exists){
            return callback(null, filename, false);
        }
        download(url, filename, err=>{
            if(err){
                return callback(err)
            }
            callback(null, filename, true);
        });
    });
}
/**
 * input argument url nad callback (error, file name, download flag )
 */
spider(process.argv[2], (err, filename, download)=>{
    if(err){
        /**
         * if error return console error 
         */
        console.log(err);
    }else if(download){
        /**
         * download done return this flag true
         */
        console.log(`Completed the download of "${filename}"`);
    }else{
        /**
         * already download url html file return flag false
         */
        console.log(`"${filename}" was already downloaded`);
    }
});