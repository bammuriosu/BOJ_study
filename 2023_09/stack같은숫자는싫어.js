function solution(arr){
    //주어진 배열 내 연속중복된 숫자 제거한 배열을 리턴
    //하나씩 new배열에 indexOf -1이면 추가
    //[1,1,3,3,0,1,1] >	[1,3,0,1]
    let result = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i-1] !== arr[i]) result.push(arr[i])
    }
    return result;
}

//다른풀이
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}