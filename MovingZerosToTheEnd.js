function moveZeros(arr) {
    // let res = []
    // let zeroArr = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] !== 0) res.push(arr[i])
    //     else zeroArr.push(arr[i])
    // }
    // return res.concat(zeroArr)

    return [...arr.filter(n => n !== 0), ...arr.filter(n => n === 0)];
}


console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));