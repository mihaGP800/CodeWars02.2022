function getSum(a, b) {
    // if (a === b) return a
    //
    // let res = 0
    //
    // if (a < b) for (; a <= b; a++) res += a
    // else if (a > b) for (; b <= a; b++) res += b
    //
    // return res

    if (a === b) return a;
    else if (a < b) return a + getSum(a + 1, b);
    else return a + getSum(a - 1, b);
}

console.log(getSum(1, 1));
console.log(getSum(0, -1));
console.log(getSum(-1, 2));