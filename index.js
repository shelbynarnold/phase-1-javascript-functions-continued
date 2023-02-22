// code your solution here

function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol){

    if(symbol == "||"){
        return function result(){
            return `You are ${symbol}a dedicated programmer${symbol}!`
        }
    } else {
        if (symbol == '*'){
            return function result(){
            return `You are ${symbol}a hard worker${symbol}!`
        }}
    }
}
