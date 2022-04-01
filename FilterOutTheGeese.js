function gooseFilter(birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    for (let i = 0; i < geese.length; i++) {
        birds = birds.filter(el => el !== geese[i])
    }
    console.log(birds);


    return birds.filter(b => !geese.includes(b));


};

gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])