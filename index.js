function saturdayFun (activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun(activity = "bathe my dog");

function mondayWork (activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective (star = "*"){
    return function (name = "a hard worker"){
        return  `You are ${star}${name}${star}!`
    }
   
}