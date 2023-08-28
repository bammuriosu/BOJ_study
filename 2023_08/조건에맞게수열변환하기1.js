function solution(arr) {
    let arr2 = [];
    for(let el of arr){
        if(el>=50 && el%2 === 0) arr2.push(el/2);
        else if(el<50 &&  el%2 === 1) arr2.push(el*2);
        else arr2.push(el);
    }
    return arr2
}

//다른풀이

const solution=a=>a.map(v=>v>=50&&v%2==0?v/2:v<50&&v%2==1?v*2:v)