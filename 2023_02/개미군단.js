function solution(hp) {
    // 개미군단
    // 보스체력 hp
    // 장군개미 5
    // 병정개미 3
    // 일개미 1
    // 개미수를 최소한으로 해서 몇마리의 개미가 필요한지 리턴
    let result = 0;
    
    while(hp>0){
        if(hp>5){
            hp -= 5;
            result ++;
        }else if(hp > 3){
            hp -= 3;
            result ++;
        }else {
            hp -= 1; 
            result ++;
        }
    }
    return result;
}
//추천풀이
function solution(hp) {
    const first = Math.floor(hp / 5);
    const second = Math.floor((hp - first * 5) / 3);
    const third = hp - first * 5 - second * 3;
    return first + second + third;
}