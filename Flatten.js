function flatten(...arr){
    // return arr.reduce((a,b)=>a.concat(Array.isArray(b)?flatten(...b):b),[])

    return arr.toString().split(",");
}

console.log(flatten(1, [2, 3], 4, 5, [6, [7]]))
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]))