function well(x) {

    let goodIdeas = x.filter(n => n === 'good').length
    return goodIdeas < 1 ? 'Fail!' : goodIdeas <= 2 ? 'Publish!' : 'I smell a series!'
}



console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
console.log(well(['bad', 'bad', 'bad', 'good', 'good', 'bad']))
console.log(well(['good', 'good', 'good', 'good', 'bad']))
console.log(well(['bad']))