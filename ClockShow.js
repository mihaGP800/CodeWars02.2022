function past(h, m, s){
    return console.log((h*60*60+m*60+s)*1000)

    const setTime = new Date().setHours(h, m, s);
    const midnight = new Date().setHours(0, 0, 0);

    // return console.log(Math.round(setTime - midnight));
}
past(0,1,1)
past(1,1,1)