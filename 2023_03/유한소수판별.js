function solution(a, b) {
    // a를 b로 나눈 수를 소수점 아래 10의 자리만큼 표기한 후 Number 타입으로 변환한다.
    // 이때 변환한 값과 a를 b로 나눈 수가 같다면 유한소수이므로 1,
    // 아니라면 무한소수이므로 2를 리턴한다.
  return Number((a/b).toFixed(10)) == a/b ? 1 : 2
}

//다른풀이
function solution(a, b) {
    let tmpB = b
    while (tmpB % 2 === 0) tmpB /= 2
    while (tmpB % 5 === 0) tmpB /= 5
    if (a % tmpB === 0) tmpB = 1
    return tmpB === 1 ? 1 : 2
}