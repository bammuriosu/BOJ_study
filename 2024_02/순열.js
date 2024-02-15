// 순서의 개념이 있음. 1,2,3 이랑 2,1,3이랑 3,1,2랑 다 다른거임
// nPr
const getPermutations= function (arr, selectNumber) {
    const results = [];
    // 배열 중 1개를 선택하는 경우 모든 요소를 1개짜리 배열에 담아 return  
    if (selectNumber === 1) return arr.map((value) => [value]); 

  // 1) 한 요소를 fixed한 후 나머지를 순열로 세운다.
    arr.forEach((fixed, index, origin) => {
    
  // 2) fixed를 제외한 나머지 배열 구하기
  const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
  // 3) 나머지 배열로 순열세우기
  const permutations = getPermutations(rest, selectNumber - 1);
  // 4) fixed와 나머지 순열 합치기
  const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
  // 5) 합친 순열을 배열에 추가
  results.push(...attached);
});

return results;
};

const example = [1,2,3,4];
const result = getPermutations(example, 3);
// [[1, 2, 3],[1, 2, 4],[1, 3, 2],[1, 3, 4],[1, 4, 2],[1, 4, 3],[2, 1, 3],[2, 1, 4],[2, 3, 1],[2, 3, 4],[2, 4, 1], ... [4, 3, 2]

```
입력 값 : [1,2,3,4]

1) 한 요소를 fixed => 1 
2) fixed를 제외한 나머지 배열 => 2,3,4
3) 나머지 배열로 순열세우기 
=> [3,4],[4,3],[2,4],[4,2],[2,3],[3,2]
4) fixed와 나머지 순열 합치기 
=> [1,3,4],[1,4,3],[1,2,4],[1,4,2],[1,2,3],[1,3,2]

1) 한 요소를 fixed => 2
...

1) 한 요소를 fixed => 3
...

1) 한 요소를 fixed => 4
...

```