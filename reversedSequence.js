<<<<<<< HEAD
const reverseSeq = n => {
    let arr = []
    for (let i = n; i > 0; i-=1) {
       arr.push(i)
    }
    return arr

    return console.log(Array(n).fill(0).map((e, i) => n - i ));
};
=======
const reverseSeq = n => {
    let arr = []
    for (let i = n; i > 0; i-=1) {
       arr.push(i)
    }
    return arr

    // return console.log(Array(n).fill(0).map((e, i) => n - i ));
};
>>>>>>> 6bff727e70845de3b244408d39ce101a90253026
reverseSeq(5)