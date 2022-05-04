function grow(x){
    return x.reduce((acc, el) => acc*el)
}

console.log(grow([1, 2, 3]));