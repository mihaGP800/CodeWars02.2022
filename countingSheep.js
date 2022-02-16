function countSheeps(arrayOfSheep) {
    // let x = arrayOfSheep.map(n => n == true ? 1 : 0)
    //     .reduce((acc, n) => (acc + n), 0)
    // return console.log(x);

    let x = arrayOfSheep.reduce((acc, n) => (acc + (n === true ? 1 : 0)), 0)
    return console.log(x);

    // function countSheeps(arrayOfSheeps) {
    //     return console.log(arrayOfSheeps.filter(Boolean).length);
    //   }


    // TODO May the force be with you
}
countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true])