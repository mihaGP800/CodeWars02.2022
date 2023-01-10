function inArray(array1,array2){
    const res = []

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            array2[j].includes(array1[i]) && res.push(array1[i])
        }
    }

    return res.filter((el, i, arr) => arr.indexOf(el) === i).sort()

    // return a1.filter( sub => a2.some( whole => whole.includes(sub))).sort();
}

console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]))