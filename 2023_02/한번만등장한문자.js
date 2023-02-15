function solution(s) {    
    const noOverlay = new Set(s);
    
    if(noOverlay.size === s.length){
        return s.split("").sort().join("");
    }
    
    const sArr = s.split("");
    
    for(let i = 0; i < sArr.length; i++){
        if(!s.includes(sArr[i])){
            continue;
        }
        
        if(s.indexOf(sArr[i]) !== s.lastIndexOf(sArr[i])){
            s = s.split(sArr[i]).join("");    
        }
    }
    
    return s.split("").sort().join("");
}

//다른풀이

function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}