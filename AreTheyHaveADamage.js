function anyArrows(arrows) {
    // arrow it
    console.log(arrows.some(el => !el.damaged));
}

anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
anyArrows([{range: 10, damaged: true}, {damaged: true}])
