function solution(prices) {
    const answer = [];
    for (let i = 0; i < prices.length; i++) {
        let stack = 0;
        for (let j = i + 1; j < prices.length; j++) {
            stack++;
            if (prices[i] > prices[j]) {
                break;      // prices의 한 요소에 대하여 더큰요소가 나올때까지 ++한다
            }
        }
        answer.push(stack);
    }
    return answer;
}

//다른풀이

function solution(prices) {
    // 가격이 떨어지지 않은 기간을 저장할 배열
    const answer = new Array(prices.length).fill(0);
    // 스택을 사용하여 가격이 떨어지지 않은 기간의 시작 인덱스를 저장
    const stack = [];

    for (let i = 0; i < prices.length; i++) {
        // 스택이 비어있지 않고, 현재 가격이 이전 가격보다 작을 때
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            // 스택에서 인덱스를 꺼내 해당 기간을 계산
            const top = stack.pop();
            answer[top] = i - top;
        }
        // 현재 인덱스를 스택에 추가
        stack.push(i);
    }

    // 스택에 남아있는 인덱스 처리
    while (stack.length > 0) {
        const top = stack.pop();
        answer[top] = prices.length - 1 - top;
    }

    return answer;
}