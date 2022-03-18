function monkeyCount(n) {
    // let arr = []
    // for (let i = 1; i <= n; i++) {
    //     arr.push(i)
    // }
    // console.log(arr)
    //
    //
    // return Array.from({length:n}, (_,i)=>i+1)
    //
    //
    // for (var i = 0, arr = []; i < n; arr.push(++i));
    // return arr;
    //
    //
    // return [...Array(n+1).keys()].slice(1);
    //
    //
    // return [...Array(n).keys()].map(a => a+1)


    console.log([...Array(n)].map((el,i)=>el = i+1));;

}

monkeyCount(5)
monkeyCount(3)
monkeyCount(1)
monkeyCount(0)