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