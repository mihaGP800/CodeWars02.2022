function rowWeights(array) {

    let team1 = 0, team2 = 0
    for (let i = 0; i < array.length; i++) {
        if (!(i % 2)) team1 += array[i]
        if (i % 2) team2 += array[i]
    }
    return [team1, team2]
}

console.log(rowWeights([80])) // [80,0]);
console.log(rowWeights([100, 50])) // [100,50]);
console.log(rowWeights([50, 60, 70, 80])) // [120,140]);