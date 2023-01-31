//emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
// [3, 76, 24]	[3, 1, 2]
function solution(emergency) {
    let sorted = emergency.slice().sort((a,b)=>b-a); // 3,76,24가 3,24,76이 됨
    return emergency.map(v=>sorted.indexOf(v)+1); // 인덱스찾아서 +1한 배열을 리턴
}