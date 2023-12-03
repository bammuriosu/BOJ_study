// 시뮬레이션
//알고리즘이 아닌 문제유형
// 요구사항을 한단계씩 해결해나갈것
// [문제] 캐릭터는 다음 순서에 따라 맵을 이동한다.
// 1. 현재 바라보는 방향에서 반시계 방향으로 90도 회전한다.
// 2. 앞으로 갈 수 있다면 이동하고, 갈 수 없다면 다시 반시계 방향으로 90도 회전한다. (네 방향 반복)
// 3. 네 방향을 모두 가봤다면 뒤로 돌아가는데, 뒤쪽 방향이 갈 수 있다면 돌아가고, 갈 수 없는 벽이라면 종료한다.
// 캐릭터가 방문한 위치는 총 몇 군데인지 확인하자.

// 캐릭터의 위치, 바라보는 방향 (0: 북쪽, 1: 동쪽, 2: 남쪽, 3: 서쪽)
let [position, direction] = [[1, 1], 0];

// 움직임 값 (Move X, Y)
mx = [-1, 0, 1, 0];
my = [0, 1, 0, -1];

// 맵(0: 땅, 1: 벽), 방문 체크(0: 미방문, 1: 방문)
const map = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];
const visit = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

// 시작 지점 방문 처리
visit[position[0]][position[1]] = 1;
let count = 1;

// 반시계 방향으로 회전하는 함수
function turn() {
  direction = direction - 1;
  if (direction < 0) direction = 3;
}

// 회전 횟수
let turnCount = 0;
while (true) {
  // 반시계 방향 회전
  turn();
  turnCount++;
  // 회전 후 이동 계산 (Next X, Y)
  [nx, ny] = [position[0] + mx[direction], position[1] + my[direction]];

  // 이동할 방향이 벽이 아니면서, 방문하지 않은 경우
  if (map[nx][ny] === 0 && visit[nx][ny] === 0) {
    position = [nx, ny];
    visit[nx][ny] = 1;
    count++;
    turnCount = 0;
  }

  // 네 방향 모두 확인한 경우
  if (turnCount === 4) {
    // 돌아갈 위치 계산 (Next X, Y)
    [nx, ny] = [position[0] - mx[direction], position[1] - my[direction]];

    // 돌아갈 곳이 벽인 경우
    if (map[nx][ny] === 1) break;
    else {
      position = [nx, ny];
      turnCount = 0;
    }
  }
}

log(count);
