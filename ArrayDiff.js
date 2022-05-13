function arrayDiff(a, b) {

    // let newArr = []
    // a.forEach(el => !b.includes(el) && newArr.push(el))
    // return newArr

    return a.filter(el => !b.includes(el))

}

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 3], [1, 2]));
console.log(arrayDiff([1, 2, 2], []));