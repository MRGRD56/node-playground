import {keys, mapValues, reduce} from 'lodash';

const obj = {
    a: 12,
    b: 23,
    c: 34
};

const reduceResult1 = reduce(keys(obj), (result, key) => {
    const value = obj[key];
    result[key] = value * 2;
    return result;
}, {});

const reduceResult2 = mapValues(obj, value => value * 2);

console.log(1, reduceResult1);
console.log(2, reduceResult2);
