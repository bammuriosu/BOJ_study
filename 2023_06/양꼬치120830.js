function solution(n, k) {
    let answer = 0;
    answer = answer + (n * 12000);

    let nPercent = Math.floor(n / 10);

    k = k - nPercent;

    answer = answer + (k * 2000);

    return answer;
}