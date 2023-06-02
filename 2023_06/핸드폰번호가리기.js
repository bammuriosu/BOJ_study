function solution(phone_number) {
    // length-1 -2 -3 -4 를 저장해서 unshift
    let phoneToArr = phone_number.split("");
    let phoneLength = phoneToArr.length;
    let newArr = [];
    for(let i = 1; i<=4; i++){
        let num = phoneToArr[phoneLength - i]
        newArr.unshift(num)
    }
    let newLen = newArr.length 
    for(let j = 0; j<phoneLength-newLen; j++){
        newArr.unshift("*")
    }
    return newArr.join("")
}

//다른풀이
function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
}