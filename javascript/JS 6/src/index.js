
function filterBy(array, type) {
    return array.filter(item => typeof item !== type);
}


const mixedArray = ['hello', 'world', 23, '23', null];
const filteredArray = filterBy(mixedArray, 'string');
console.log(filteredArray);  // Вывод: [23, null]
