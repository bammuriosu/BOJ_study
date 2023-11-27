// [문제] 손님에게 돈을 받았을 때, 거스름돈으로 줘야 하는 동전을 최소화하기
const coins = [500, 100, 50, 10];
let money = 2370;
let result = 0;

// 단위가 큰 동전부터 처리하기
coins.forEach((coin) => {
  result = result + Math.floor(money / coin);
  money = money % coin;
});

// 10 (500: 4, 100: 3, 50: 1, 10: 2)
log(result);
