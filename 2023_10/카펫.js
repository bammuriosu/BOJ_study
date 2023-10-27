function solution(brown, yellow) {
    // brown + yellow = garo * sero
    let garo = 0;
    let sero = 0;
    while(garo*sero !== brown+yellow){
            garo++;
            if(garo*sero === brown+yellow) break;
            if((garo+1)*sero === brown+yellow){
                garo++;
                break;
            };
            sero++;
    }
    return [garo, sero]
    
}

//다른풀이

function solution(brown, red) {
    var sum = brown + red;
    var x = sum - 1,div = 0, mod = 0;    
    for(;x > 2; x--) {
        div = sum / x;
        mod = sum % x;
        if(mod == 0 && div > 2 && ((x-2) * (div-2)) == red) {
            return [x, div];
        }
    }
}
