function setAlarm(employed, vacation){
    console.log(!(employed === vacation || !employed && vacation))

    employed && !vacation
}
setAlarm(true, true)
setAlarm(false,true)
setAlarm(false, false)
setAlarm(true, false)