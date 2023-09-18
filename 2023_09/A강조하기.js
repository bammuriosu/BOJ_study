function solution(myString) {
    let str =[... myString.toLowerCase()];
    let arr = [];
    for(let el of str){
        if(el==="a") arr.push("A")
        else arr.push(el);
    }
    return arr.join("")
}

//다른풀이
const solution=s=>s.toLowerCase().replaceAll('a','A');