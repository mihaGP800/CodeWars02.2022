let number = function (array) {

    return array.map((el, i) => `${i + 1}: ${el}`)

}

console.log(number(["a", "b", "c"]));
console.log(number([]));