let uniqueInOrder = (x) => {

    // let res = []
    // for (let i = 0; i < x.length; i++) {
    //     if (i === 0) res.push(x[i])
    //     if (x[i] === x[i + 1]) {
    //         res
    //     } else {
    //         x[i + 1] && res.push(x[i + 1])
    //     }
    // }
    //
    // return res
    let res = []

    for (let i = 0; i < x.length; i++) {
        if (x[i] !== x[i + 1]) {
            res.push(x[i])
        }
    }

    return res

    // return [...x].filter((a, i) => a !== x[i-1])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));