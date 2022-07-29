function replicate(times, number) {
    return times > 0 ? [number, ...replicate(times - 1, number)] : []

    // return times > 0 ? Array(times).fill(number) : []

}


console.log(replicate(3, 5));
console.log(replicate(5, 1));
console.log(replicate(-1, 5));