import {keys, map, mapValues, reduce} from 'lodash';

const obj = {
    a: 12,
    b: 23,
    c: 34
};

const res1 = reduce(keys(obj), (result, key) => {
    const value = obj[key];
    result[key] = value * 2;
    return result;
}, {});

const res2 = mapValues(obj, value => value * 2);

const objs = [
    {
        id: 123123,
        name: 'qweqweqw'
    },
    {
        id: 52334224,
        name: 'qweqwcvever'
    }
];

const res3 = map(objs, 'id');

console.log(1, res1);
console.log(2, res2);
console.log(3, res3);
