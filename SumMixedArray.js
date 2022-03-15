function sumMix(x){
    console.log(x.reduce((acc,n) => acc + JSON.parse(n)))

}
sumMix([9, 3, '7', '3'])