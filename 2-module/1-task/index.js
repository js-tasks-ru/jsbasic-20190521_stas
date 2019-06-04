'use strict'
/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
    let clone = {};
    for (let key in obj){
        if (typeof obj[key] == "object") {
        clone[key] = {};
        for (let key2 in obj[key]) {
            if (typeof obj[key][key2] == "object"){
            clone[key][key2] = {};
            for (let key3 in obj[key][key2])
                clone[key][key2][key3] = obj[key][key2][key3];
            }
            else clone[key][key2] = obj[key][key2];
        }
        }
        else clone[key] = obj[key];    
    }
  return (clone);
}