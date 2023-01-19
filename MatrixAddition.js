function matrixAddition(a, b) {
    // const res = []
    //
    // for (let i = 0; i < a.length; i++) {
    //     const resInner = []
    //
    //     for (let j = 0; j < a[i].length; j++) {
    //         resInner.push(a[i][j] + b[i][j])
    //     }
    //
    //     res.push(resInner)
    // }
    //
    // return res

    return a.map((a,i)=>a.map((a,j)=>a+b[i][j]))
}

console.log(matrixAddition(
    [[1, 2],
        [1, 2]],
    [[2, 3],
        [2, 3]]))