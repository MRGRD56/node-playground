import Switch from './Switch';

const value = 12;

const aResult = Switch.of(value)
    .onCase(21, () => 'hello')
    .onCase(15, () => 'world')
    .onCase(51, () => 'lorem')
    .onDefault(() => 123);

console.log(aResult);

const bResult = {
    21: () => 'hello',
    15: () => 'world',
    51: () => 'lorem'
}[value]?.() ?? 123;

console.log(bResult);

const cResult = (() => {
    switch (value as number) {
        case 21:
            return 'hello';
        case 15:
            return 'world';
        case 51:
            return 'lorem';
        default:
            return 123;
    }
})();

console.log(cResult);
