// 완전탐색
// 모든 경우의 수를 계산하는 방법
// 반복문과 조건문을 주로 사용
// [문제] 친구가 생각하고 있을 가능성이 높은 숫자의 개수 맞추기
// 친구가 123을 생각하고 있다면, 147은 1스트라이크 0볼이다. (자릿수까지 일치해야 스트라이크)
// 친구가 123을 생각하고 있다면, 213은 1스트라이크 2볼이다. (자릿수는 일치하지 않지만, 포함된 숫자라면 볼)

// [내가 예측한 숫자, 스트라이크 개수, 볼 개수]
const input = [
    [123, 1, 1],
    [356, 1, 0],
    [327, 2, 0],
    [489, 0, 1],
  ];
  
  const answer = [];
  
  // 불필요한 경우의 수 제거
  for (let i = 123; i <= 987; i++) {
    const temp = String(i);
    // 숫자는 중복될 수 없으며, 0 또한 존재할 수 없음 (ex. 131, 190, 200 등)
    if (temp.includes('0') || temp[0] === temp[1] || temp[1] === [2] || temp[2] === temp[0]) continue;
    answer.push(temp);
  }
  
  // 경우의 수 모두 확인
  input.forEach((data) => {
    // 내가 예측한 숫자
    const temp = String(data[0]);
  
    for (let i = answer.length - 1; i >= 0; i--) {
      let [strike, ball] = [0, 0];
  
      for (let j = 0; j < 3; j++) {
        // 숫자와 자릿수가 모두 일치하면 스트라이크
        if (answer[i][j] === temp[j]) strike++;
        // 숫자는 포함되어 있지만, 자릿수가 다르다면 볼
        if (answer[i][(j + 1) % 3] === temp[j] || answer[i][(j + 2) % 3] === temp[j]) ball++;
      }
  
      // 스트라이크와 볼의 개수가 맞지 않는 경우 모두 제거
      if (strike !== data[1] || ball !== data[2]) answer.splice(i, 1);
    }
  });
  
  // 2 (324, 328)
  log(answer.length);
