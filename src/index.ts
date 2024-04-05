import React from 'react';
import _ from "https://esm.sh/lodash@4.17.21"
// ^- Error 2307
const result = _.flattenDeep([1, [2, [3, [4]], 5]]);
console.log(result);
console.log('====================================');
console.log("Hello World!");
console.log('====================================');


function printNumber(nr:number) {
    console.log('====================================');
    console.log(nr);
    console.log('====================================');
}
// @ts-expect-error
printNumber(123)









