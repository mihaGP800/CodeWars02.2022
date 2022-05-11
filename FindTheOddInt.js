function findOdd(arr) {
    let res

    for (let i = 0; i < arr.length; i++) {
        if (arr.filter(el => el === arr[i]).length % 2 ) {
            return res = arr[i]
        }
    }
    return res
}

console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log(findOdd([20]));
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));