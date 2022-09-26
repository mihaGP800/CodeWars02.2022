function dontGiveMeFive(start, end) {
    let res = []
    for (let i = start; i <= end; i++) {
        if (i.toString().split('5').length > 1 || !(i % 5) && i % 10) continue
        res.push(i)
    }
    return res.length;

    // let count = 0
    // for (let i = start; i <= end; i++) {
    //     if (!/5/.test(i)) {
    //         count++
    //     }
    // }
    // return count

    // let res = [];
    // for (let i = start; i <= end; i++) {
    //     if (!i.toString().includes('5')) res.push(i);
    // }
    // return res.length;
}

console.log(dontGiveMeFive(1, 9)) // 8
console.log(dontGiveMeFive(4, 17)) // 12