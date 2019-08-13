const request = require('request');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const utilities = require('./utilities');

/**
 * web crawling input url callback(err, filename, flag)
 * 
 * @param {any} url 
 * @param {any} callback 
 */
function spider(url, callback){
    const filename = utilities.urlToFilename(url);
    /**
     * file checking exist or not
     */
    fs.exists(filename, exists=>{
        /**
         * if not exist file do
         */
        if(!exists){
            
            console.log(`Downloading ${url}`);
            /**
             * get request html file input url return callback(err, response, body)
             */
            request(url, (err, response, body)=>{
                if(err){
                    callback(err);
                    /** direct return callback */
                    // return callback(err);
                }else{
                    /**
                     * make file name 
                     */
                    mkdirp(path.dirname(filename), err=>{
                        if(err){
                            callback(err);
                            /** direct return callback */
                            // return callback(err);
                        }else{
                            /**
                             * file write 
                             * file name is filename
                             * file write body (html file)
                             */
                            fs.writeFile(filename, body, err=>{
                                if(err){
                                    callback(err);
                                    /** direct return callback */
                                    // return callback(err);
                                }else{
                                    callback(null, filename, true);
                                }
                            });
                        }
                    });
                }
            });
        }else{
            callback(null, filename, false);
        }
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