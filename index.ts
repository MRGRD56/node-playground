const numbers = [1_234_567, 1_231, 231];

numbers.forEach(value => {
    console.log(value.toLocaleString('ru-RU', {useGrouping: true}));
})
