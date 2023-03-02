function solution(sides) {
    //두변더한것-1 - 두변의길이를 뺀것+1 +1
    
    return Math.abs(sides[1]-sides[0]) + 1 
    
}

//다른풀이


function solution(sides) {
    return Math.min(...sides)*2-1
}