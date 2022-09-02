function checkExam(arr1, arr2) {
    let res = 0
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) res += 4
        else if (!arr2[i]) res += 0
        else res -= 1
    }
    return res < 0 ? 0 : res
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); //6);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); //0);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); //16);