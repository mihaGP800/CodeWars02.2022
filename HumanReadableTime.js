function humanReadable(sec) {
    let ss = 0, mm = 0, hh = 0

    if (sec >= 3600) {
        hh = (sec - sec % 3600) / 3600
        sec = sec % 3600
    }

    if (sec >= 60 && sec < 3600) {
        mm = (sec - sec % 60) / 60
        sec = sec % 60
    }
    if (sec < 60) ss = sec

    const addZero = (value) => value < 10 ? '0' + value : value

    return `${addZero(hh)}:${addZero(mm)}:${addZero(ss)}`
}


console.log(humanReadable(0)) //, '00:00:00'
console.log(humanReadable(59)) //, '00:00:59'
console.log(humanReadable(60)) //, '00:01:00'
console.log(humanReadable(90)) //, '00:01:30'
console.log(humanReadable(3712)) //, '00:59:59'