

let set = new Set(); // 세트 : 배열과 비슷한 자료구조, 데이터를 순서없이 저장, 중복 허용안함
numOfCase([1,7],'')
function numOfCase(arr,str) {
	if(arr.length) {
    	for(let i = 0; i <arr.length; i++) {
        	let copy = [...arr];
          	copy.splice(i,1); //i번째에 하나 넣음
          	numOfCase(copy,str + arr[i]); 재귀
        }
    }
  	if(str > 0) set.add(Number(str))
}
console.log(Array.from(set))  // [17, 1, 71, 7]

//[1,2,3] 의 완전탐색
```
[1],[2],[3],
[1,2],[2,1],[2,3],[3,2],[1,3],[3,1],
[1,2,3],[2,1,3],[2,3,1]...
```