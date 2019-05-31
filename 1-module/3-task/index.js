'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let separatorStr = /[\s,]+/;
    let numberList = str.split(separatorStr);
    let minNumber = 0
    let maxNumber = 0
    for (let i = 0; i < numberList.length; i++) {
        if( minNumber > +numberList[i]){
            minNumber = +numberList[i];
        };
        if( maxNumber < +numberList[i]){
            maxNumber = +numberList[i];
        };
    };
    let result = {};
    result.min = minNumber;
    result.max = maxNumber;
    return(result)
}

