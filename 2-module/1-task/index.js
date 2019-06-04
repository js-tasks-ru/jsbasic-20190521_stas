'use strict'
/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
'use strict'

function clone(obj) {
    let clone = {};
    for ( let key in obj){
        if ( typeof obj[key] == "object") {
            clone[key] = getObj(obj[key]);
        }
        else clone[key] = obj[key];
    }
    return clone;
}

function getObj(obj) {
    let clone = {};
    for(let key in obj){
        if(typeof obj[key] === "object" && obj[key] !== null){
            clone[key] = getObj(obj[key]);
        }
        else clone[key] = obj[key];
    }
    return clone;
}