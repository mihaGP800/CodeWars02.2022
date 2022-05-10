function solution(n) {
    // return [...Array(n - 1)].map((_, i) => i + 1)
    //     .reduce((acc, el) => {
    //         if (n < 0) {
    //             return 0
    //         } else if (el % 3 === 0 && el % 5 === 0) {
    //             return acc + el
    //         } else if (el % 3 === 0 || el % 5 === 0) {
    //             debugger
    //             return acc + el
    //         } else
    //             return acc
    //     }, 0)

    let c = 0;
    for (let i = 1; i < n; i++) {
        if (0 === i % 3 || 0 === i % 5)
            c += i;
    }
    return c

}

console.log(solution(15))