var min = function(list){

    console.log(Math.min.apply(Math,list))

    Math.min(...list)

    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){

    console.log(Math.max.apply(Math,list))

    Math.max(...list)

    console.log(list.sort((a, b) => (b - a)));;
    return list[0];

    const max = list => list.sort((a ,b) => a - b).pop();

    const min = list => list.sort((a ,b) => a - b).shift();
}

min([-52, 56, 30, 29, -54, 0, -110])
min([42, 54, 65, 87, 0])
max([4,6,2,1,9,63,-134,566])
max([5])