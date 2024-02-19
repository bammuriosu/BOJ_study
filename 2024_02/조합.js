//조합은 순서 안따짐 1,2,3 이나 2,1,3이나 똑같이 1개로 침
const getCombinations = function (arr, selectNumber) {
	const results = [];
  	// 배열 중 1개를 선택하는 경우 모든 요소를 1개짜리 배열에 담아 return
  	if (selectNumber === 1) return arr.map((value) => [value]);
	
  	// 1) 한 요소를 fixed한 후 나머지를 조합해서 붙인다.
    arr.forEach((fixed, index, origin) => {        //map함수 비슷한것, arr의 요소를 function에 적용시킨다. 리턴값없는게 map과의 차이점
       	// 2) fixed를 제외한 나머지 배열 구하기
      	const rest = origin.slice(index + 1);
      	// 3) 나머지 배열을 조합하기
      	const combinations = getCombinations(rest, selectNumber - 1);
      	// 4) fixed와 나머지 조합 합치기
      	const attached = combinations.map((combination) => [fixed, ...combination]);
      	// 합친 조합을 배열에 추가
      	results.push(...attached); 
    });

  	return results;
}

const example = [1,2,3,4];
const result = getCombinations(example, 3);
console.log(result); // [[1, 2, 3],[1, 2, 4],[1, 3, 4],[2, 3, 4]]


//결과 분석
```
입력 값 : [1,2,3,4]

1) 한 요소를 fixed => 1 
2) fixed를 제외한 나머지 배열 => 2,3,4
3) 나머지 배열로 조합하기 
=> [2,3],[2,4],[3,4]
4) fixed와 나머지 조합 합치기 
=> [1,2,3],[1,3,4],[1,2,4]

1) 한 요소를 fixed => 2
2) fixed를 제외한 나머지 배열 => 3,4
3) 나머지 배열로 조합하기 
=> [3,4]
4) fixed와 나머지 조합 합치기 
=> [2,3,4]

...

1) 한 요소를 fixed => 3
...

1) 한 요소를 fixed => 4
...
```