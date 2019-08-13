"use strict";

const urlParse = require('url').parse;
const slug = require('slug');
const path = require('path');

/**
 * module export urlToFilename 
 */
module.exports.urlToFilename= function urlToFilename(url){
    const parseUrl = urlParse(url);
    const urlPath = parseUrl.path.split('/')
    .filter(function(component){
        return component !== '';
    })
    .map(function(component){
        return slug(component, {remove:null});
    })
    .join('/');
    let filename = path.join(parseUrl.hostname, urlPath);

    if(!path.extname(filename).match(/htm/)){
        filename += '.html';
    }
    return filename;
};