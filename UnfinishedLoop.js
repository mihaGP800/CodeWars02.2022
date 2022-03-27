function createArray(n) {
    let newArray = [];

    for (let counter = 1; counter <= n; counter++) {
        newArray.push(counter);
    }

    console.log(newArray);

    console.log([...Array(n)].map((v, i) => i + 1))
}

createArray(2)
createArray(4)
createArray(5)