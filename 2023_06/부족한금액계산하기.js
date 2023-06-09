function solution(price, money, count) {
    //놀이기구 원래가격 price원
    // N번째 이용한다면 원래이용료의 N배
    // 놀이기구를 count번 타게되면 현재 갖고있는 금액에서 얼마가 모자라는지 return
    // 금액이 부족하지 않다면 0을 return
    // 3 + 6 + 9 + 12 - money
    // if result < 0 return 0
    let result = -1;
    let sum = 0;
    for(let i = 1; i<=count; i++){
        sum += price * i
    }
    result = sum - money;
    if(result<0) return 0;
    return result;
    
}

//다른풀이

function solution(price, money, count) {
    let answer = 0;

    for (let i = 1; i <= count; i++) {
        answer += price * i;
    }

    return answer > money ? answer - money : 0;
}
