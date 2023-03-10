const largestProductOfThree = function (arr) {
    //정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.
    // 정수를 요소로 갖는 배열
    // 3개의 요소를 곱해
    // 나올수 있는 최대값을 리턴해야함
    // 일단 절대값으로 큰수 3개를 뽑고
    // 음수가 2개가 아니면 양수에서 3개 뽑는다.
    const sorted = arr.slice().sort((a, b) => a - b);
    const len = arr.length;
    const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
    const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
    return Math.max(candi1, candi2);
  };
  