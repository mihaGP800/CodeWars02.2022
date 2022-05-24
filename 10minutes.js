function isValidWalk(walk) {
    const obj = {}

    if(walk.length === 10){
        walk.forEach((el, i, arr) => obj[el] = (obj[el] || 0) +1 )
    }else return false

    return obj.n === obj.s && obj.e === obj.w
    // return obj
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));