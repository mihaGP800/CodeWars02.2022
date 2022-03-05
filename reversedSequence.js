const reverseSeq = n => {
    let arr = []
    for (let i = n; i > 0; i-=1) {
       arr.push(i)
    }
    return arr

    return console.log(Array(n).fill(0).map((e, i) => n - i ));
};
reverseSeq(5)