function findDifference(a, b) {
    console.log(
        Math.abs(a.reduce((acc,n)=>acc*n)-b.reduce((acc,n)=>acc*n))
    )
}

findDifference([3, 2, 5], [1, 4, 4])
findDifference([9, 7, 2], [5, 2, 2])