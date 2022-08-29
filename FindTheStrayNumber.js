function stray(numbers) {

    // let res = {}
    //
    // for (let i = 0; i < numbers.length; i++) {
    //     if (!res[numbers[i]]) res[numbers[i]] = 1
    //     else res[numbers[i]] +=1
    // }
    // return +Object.entries(res).sort((a,b)=> a[1] -b[1])[0][0]

    for (const i in numbers) {
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }


    // return numbers.reduce((a, b) => a ^ b);
}


console.log(stray([1111, 1111, 2222]))
// console.log(stray([17, 17, 3, 17, 17, 17, 17]))