/** 
exports.add = (a,b)=>{
    return a+b
}

exports.minus = (a,b)=>{
    return a-b
}

exports.prod = (a,b)=>{
    return a*b
} **/

let add = (a,b)=>{
    return a+b
}

let minus = (a,b)=>{
    return a-b
}

let prod = (a,b) =>{
    return a*b
}

module.exports = {
    add : add,
    minus : minus,
    prod : prod
}
