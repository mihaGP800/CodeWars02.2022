function solution(str) {
    const res = []
    const arr = str.split('')

    // for (let i = 0; i < arr.length; i+=2) {
    //     if (arr[i + 1]) res.push(arr[i] + arr[i + 1])
    //     else res.push(arr[i] +'_')
    // }
    //---------------------------------------------------------------------
    // for (let i = 0; i < arr.length; i+=2) {
    //     res.push(arr[i] + (arr[i + 1] || '_'))
    // }
    //---------------------------------------------------------------------
    for (let i = 0; i < str.length; i += 2) {
        res.push(str[i] + (str[i + 1] || '_'))
    }
    //---------------------------------------------------------------------
    // if(str.length % 2) str = str +'_'
    // let i = 0
    // while (i < str.length){
    //     res.push(str[i] + str[i + 1])
    //     i+=2
    // }



    return res
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));