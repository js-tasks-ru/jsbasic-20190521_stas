'use strict'
/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty (obj) {
    let keyCount = 0
    for (let key in obj) {
        ++keyCount;
    }
    if(keyCount > 0) return false;
    else return true
}