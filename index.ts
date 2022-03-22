import {keys, reduce} from 'lodash';

const obj = {
    a: 12,
    b: 23,
    c: 34
};

const reduceResult = reduce(keys(obj), (result, key) => {
    const value = obj[key];
    result[key] = value * 2;
    return result;
}, {});

console.log(reduceResult);
