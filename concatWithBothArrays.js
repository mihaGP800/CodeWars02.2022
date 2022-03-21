function countBy(x, n) {

    let z = [];

    console.log([...z, x].concat([...Array(n)].map((el,ind)=>ind+1)));
}
countBy(1,10)
countBy(2,5)