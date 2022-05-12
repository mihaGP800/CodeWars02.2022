function digital_root(n) {
    let m = String(n).split('').reduce((acc, el) => acc + Number(el), 0)
    return n > 9 ? digital_root(m) : m

    // return n  % 9 ;
}

console.log(digital_root(16));
console.log(digital_root(456));
