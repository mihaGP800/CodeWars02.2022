function count(string) {
    // const obj = {}
    // string.split('').forEach(c => obj[c] = obj[c] + 1 || 1)
    // return obj;


    return string.split('').reduce((obj, c) => {
        obj[c] = (obj[c] || 0) + 1
        return obj;
    }, {})

}

console.log(count("abaabc"));
console.log(count(""));
