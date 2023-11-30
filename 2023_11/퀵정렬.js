//퀵정렬
function quickSort(arr) {
    // 길이가 1 이하라면 정렬할 필요가 없음
    if (arr.length <= 1) return arr;
  
    // 첫 번째 원소를 기준으로 설정 (이하 피봇)
    const pivot = arr[0];
    // 피봇 요소를 기준으로 작은 값, 큰 값을 가진 배열을 만듦
    const left = arr.filter((item) => item < pivot);
    const right = arr.filter((item) => item > pivot);
  
    // 분할된 배열도 퀵 정렬을 재귀 호출하며 정렬해 나감
    // concat은 배열을 병합해 하나로 만드는 메소드
    return quickSort(left).concat([pivot], quickSort(right));
  }
  
  const array = [2, 5, 4, 3, 1, 7, 6];
  quickSort(array);  // [1, 2, 3, 4, 5, 6, 7]
