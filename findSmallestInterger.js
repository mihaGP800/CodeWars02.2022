function findSmallestInt(args) {
    console.log(Math.min(...args))


    console.log(Math.min.bind(Math, 78,56,232,12,8)())
    console.log(Math.min.call(Math, 78,56,232,12,8))
    console.log(Math.min.apply(Math, args))
    console.log(Math.min.apply(null, args))
}



findSmallestInt([78,56,232,12,8])