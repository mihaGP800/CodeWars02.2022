const startRecursion = performance.now()

function sumFirstNumbers1(N) {
    return N === 0 ? 0 : N + sumFirstNumbers1(N - 1)
}

sumFirstNumbers1(10000)
const endRecursion = performance.now()
console.log(`Speed [Recursion]: ${endRecursion - startRecursion} miliseconds`)


const startArrayMethods = performance.now()

function sumFirstNumbers2(N) {
    return [...Array(N)].reduce((acc, n, i) => acc + i + 1, 0)
}

sumFirstNumbers2(10000)
const endArrayMethods = performance.now()
console.log(`Speed [ArrayMethods]: ${endArrayMethods - startArrayMethods} miliseconds`)


const startLoopFor = performance.now()

function sumFirstNumbers3(N) {

    let sum = 0
    for (let i = 0; i <= N; i++) {
        sum += i
    }
    return sum
}

sumFirstNumbers3(10000)
const endLoopFor = performance.now()
console.log(`Speed [LoopFor]: ${endLoopFor - startLoopFor} miliseconds`)