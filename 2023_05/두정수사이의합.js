function solution(a, b) {
    let sum = 0;
    if(b<a){
        for(let i = b; i<=a; i++){
        sum += i;
        }
    }else{
        for(let i = a; i<=b; i++){
        sum += i;
    }
    }
    

    return sum
}


// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function adder(a, b){
    var result = 0
    //함수를 완성하세요
    return (a+b) * (Math.abs(a-b)+1) / 2;
}