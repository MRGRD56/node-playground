const call = <V, A extends any[], R>(func: (this: V, ...args: A) => R, ...args: A) =>
    (value: V): R => func.call(value, ...args);

const array = ['Hello  12', ' 23 WoRlD ', ' 44  LorEm ', 'IpSuM   '];

const result = array
    .map(call(String.prototype.toLowerCase))
    .map(call(String.prototype.trim))
    .filter(call(String.prototype.includes, '2'))
    .map(string => Number.parseInt(string))
    .find(Boolean);

console.log((result));


Object.defineProperty(Function.prototype, 'callThis', {
    value: call
});

const result2 = array
    .map(String.prototype.toLowerCase.callThis);

/*

https://stackoverflow.com/questions/56192114/java-method-reference-operatordouble-colon-equivalent-in-typescript

You can write and use a `call` function like this:

```typescript
const call = <V, A extends any[], R>(func: (this: V, ...args: A) => R, ...args: A) =>
    (value: V): R => func.call(value, ...args);

const array = ['Hello  12', ' 23 WoRlD ', ' 44  LorEm ', 'IpSuM   '];

const result = array
    .map(call(String.prototype.toLowerCase))
    .map(call(String.prototype.trim))
    .filter(call(String.prototype.includes, '2'))
    .map(string => Number.parseInt(string))
    .find(Boolean);

console.log((result));
```
You can also try changing the Function prototype to call this as

 */
