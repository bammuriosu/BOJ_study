// [문제] 떡볶이 떡 만들기
// 손님이 떡볶이를 만들기 위해 떡을 사러 왔다.
// 떡은 너무 길기 때문에 절단기를 통해 손님이 원하는 만큼 잘라줘야 한다.
// 절단기로 떡을 자를 때는 모든 떡이 일괄로 잘리게 된다.
// 떡이 17cm, 19cm, 14cm 세 개가 있고, 절단기의 높이가 15cm라면 잘랐을 때 총 6cm가 나온다.
// 손님이 원하는 길이로 잘라주려면 절단기의 높이를 몇으로 해야 하는가?

// 손님이 원하는 길이와 떡들의 길이
const need = 6;
const dduks = [19, 15, 10, 17];

// end 값으로 가장 길이가 긴 떡을 사용해 이진 탐색을 돌리면 된다.
function binarySearch(arr, target, start, end) {
  if (start > end) return null;

  // 중앙값으로 떡들을 자른 후 길이를 더함
  const cut = Math.floor((start + end) / 2);
  const sum = arr.reduce((pre, cur) => {
    let temp = cur - cut;
    return temp <= 0 ? pre : pre + temp;
  }, 0);

  if (sum === target) return cut;
  else if (sum < target) return binarySearch(arr, target, start, cut - 1);
  else if (sum > target) return binarySearch(arr, target, cut + 1, end);
}

// 15cm로 잘라줘야 손님이 원하는 6cm를 얻어갈 수 있음
log(binarySearch(dduks, need, 0, Math.max(...dduks)));