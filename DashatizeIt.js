function dashatize(num) {
    if (isNaN(num) || num === 0) return `${num}`

    let res = []
    Math.abs(num).toString().split('').forEach((n, i, arr) => {
        if (!(n % 2) && arr[i + 1] % 2) res.push(n + '-')
        else if (!(n % 2)) res.push(n)
        else if (i === arr.length - 1 && n % 2) res.push(n)
        else res.push(n + '-')
    })
    return res.join('')



    // return num = num.toString().split("").map(function(c){
    //     return c % 2 ? "-" + c + "-" :  c ;
    // }).join("").split("-").filter(a => a != "").join("-");
}

console.log(dashatize(-5311))   // "5-3-1-1"
console.log(dashatize(86320))   // "86-3-20"
console.log(dashatize(NaN))   // "NaN"
console.log(dashatize(0))   // "0"