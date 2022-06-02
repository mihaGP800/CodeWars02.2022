function findUniq(arr) {



    return arr.filter((el, i, array) => array.indexOf(el) === array.lastIndexOf(el))[0]
    // let res
    // arr.forEach(el => {
    //     if (arr.indexOf(el) === arr.lastIndexOf(el)) res = el
    // })
    // return res
}

console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 0, 0.55, 0, 0]));