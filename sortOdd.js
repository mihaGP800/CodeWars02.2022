function sortArray(array) {
    const odd = array.filter(el => el % 2).sort((a, b) => a-b)
    return array.map(el =>  el % 2 ? odd.shift() : el)
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));

