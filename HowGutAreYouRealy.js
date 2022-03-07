function betterThanAverage(classPoints, yourPoints) {
    console.log(classPoints.reduce((acc,p)=> acc + p)/classPoints.length < yourPoints)
    // Your code here
}

betterThanAverage([2, 3], 5)