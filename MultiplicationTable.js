const multiplicationTable = (size) => {
    let r = []
    for (let i = 1; i <= size; i++) {
        let x = []
        for (let j = 1; j <= size; j++) {
            x.push(i * j)
        }
        r.push(x)
    }
    return r
}

console.log(multiplicationTable(3))
console.log(multiplicationTable(0))
console.log(multiplicationTable(1))