function solution(numbers) {
    // 배열에서 0부터 9까지 찾을수없는 숫자를 모두찾아 
    // 더한수를 리턴
    // [0123456789] 배열을 요소 하나하나가 includes false 면 뉴어레이에 넣고 리듀스
    let newArr = [0,1,2,3,4,5,6,7,8,9].filter((el)=>{
        return !numbers.includes(el)
    })
    return newArr.reduce((acc,cum) => acc+cum);
}