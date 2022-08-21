function lenR(x) {

    let [head, ...tail] = x

    if (!head) return 0

    return 1 + lenR(tail)

}

console.log(lenR([]))
console.log(lenR([1,2,3]))

