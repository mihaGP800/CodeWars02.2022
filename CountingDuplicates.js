function duplicateCount(text) {
    // let count = {}
    //
    // text.toLowerCase().split('').forEach( (el, i,arr) => {
    //     count[el] = (count[el] || 0) + 1
    // } )
    //
    // let arr = Object.values(count).filter(el => el >1)
    //
    // return arr.length ? Math.min.apply(null, arr) : 0


    return text.toLowerCase().split('').filter((el, i, arr) =>
        arr.indexOf(el) !== i && arr.lastIndexOf(el) === i).length;

}

console.log(duplicateCount(""));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("Indivisibilities"));