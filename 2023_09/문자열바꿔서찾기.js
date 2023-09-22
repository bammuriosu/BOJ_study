function solution(myString, pat) {
    let arr1 = [];
    let myString1 = [...myString];
    for(let el of myString1){
        if(el === "A")arr1.push("B");
        if(el === "B")arr1.push("A");
    }
    return arr1.join('').includes(pat) ? 1 : 0
}

//다른풀이

const solution = (myString, pat) => [...myString].map(v => v === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0