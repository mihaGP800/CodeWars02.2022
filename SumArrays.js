// Sum Numbers
function sum(numbers) {
    console.log(numbers.reduce((acc,num)=>acc+num),0)

    let num = 0
    for (let i = 0; i < numbers.length; i++) {
        num += numbers[i]
    }
    console.log(num)

};

sum([1, 5.2, 4, 0, -1])