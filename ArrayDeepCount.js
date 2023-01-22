function deepCount(a) {
    // let length = a.length
    //
    // function flatten(array) {
    //     let res = []
    //
    //     for (let i = 0; i < array.length; i++) {
    //         if (Array.isArray(array[i])) {
    //             length += array[i].length
    //             res = [...res, ...flatten(array[i])]
    //         } else {
    //             res.push(array[i])
    //         }
    //     }
    //     return res
    // }
    //
    // flatten(a)
    //
    // return length

    return a.reduce((s, e) => s + (Array.isArray(e) ? deepCount(e) : 0), a.length);
}

console.log(deepCount([]))
console.log(deepCount([1, 2, 3]))
console.log(deepCount([1, 2, [3, 4, [5]]]))