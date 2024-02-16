

let set = new Set();
numOfCase([1,7],'')
function numOfCase(arr,str) {
	if(arr.length) {
    	for(let i = 0; i <arr.length; i++) {
        	let copy = [...arr];
          	copy.splice(i,1);
          	numOfCase(copy,str + arr[i])
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