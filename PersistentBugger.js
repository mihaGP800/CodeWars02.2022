function persistence(num) {
    // let count = 0
    //
    // while (num.toString().split('').length > 1) {
    //     num = num.toString().split('').reduce((acc, n) => acc * n)
    //     count++
    // }
    //
    // return count

    return `${num}`.length > 1
        ? 1 + persistence(`${num}`.split('').reduce((acc, n) => acc * n))
        : 0

    // for (var i = 0; num > 9; i++) {
    //     num = num.toString().split('').reduce((acc, n) => acc * n)
    // }
    // return i

}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));