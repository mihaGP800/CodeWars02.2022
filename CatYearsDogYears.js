let humanYearsCatYearsDogYears = function (humanYears) {
    if (humanYears === 1) {
        console.log([humanYears, 15, 15]);
    } else if (humanYears === 2) {
        console.log([humanYears, 15 + 9, 15 + 9]);
    } else if (humanYears > 2) {
        console.log([humanYears, (15 + 9) + 4 *(humanYears-2), (15 + 9) + 5 *(humanYears-2)]);
    }
}

humanYearsCatYearsDogYears(1)
humanYearsCatYearsDogYears(2)
humanYearsCatYearsDogYears(8)