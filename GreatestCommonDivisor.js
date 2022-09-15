function mygcd(x,y){
    // for (let i = y; i >= 1; i--) {
    //     if (!(x % i) && !(y % i )) return i
    // }


    return y == 0 ? x : mygcd(y, x % y)


}

console.log(mygcd(30,12)) // 6
console.log(mygcd(8,9)) // 1
console.log(mygcd(1,1)) // 1