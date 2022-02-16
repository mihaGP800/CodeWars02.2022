function updateLight(current) {

    if (current === 'green') {
        return 'yellow'
    } else if (current === 'yellow') {
        return 'red'
    } else if (current === 'red') {
        return 'green'
    }


    // return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green' 

    // return {
    //     green: 'yellow',
    //     yellow: 'red',
    //     red: 'green'
    // }[current]
}