function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc,el)=> acc + el) + arr2.reduce((acc,el)=> acc + el); //something went wrong

    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);

    return [].concat(...arrays).reduce((a,b) => a+b,0)

    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);

    [...arr1, ...arr2].reduce((a, b) => a + b, 0);
}
arrayPlusArray([1, 2, 3], [4, 5, 6])