function solution(s){
    // 문자열 s에 p, y개수가 같으면 True, 아니면 False를 리턴
    // 둘다 없으면 True
    // 대소문자 구별 x
    // 원소 하나하나에 대하여 
    // pP에 속하면 pCount ++
    // yY에 속하면 yCount ++
    // return pCount === yCount
    let pCount = 0;
    let yCount = 0;
    for(let el of s) {
        if(["P","p"].includes(el)) pCount++;
        else if(["Y","y"].includes(el)) yCount++;
    }
    return pCount === yCount;
}

//다른풀이

function numPY(s){
    //함수를 완성하세요
      return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}