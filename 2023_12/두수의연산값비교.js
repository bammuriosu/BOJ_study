function solution(a, b) {
    return Number(a.toString()+b.toString()) >= 2*a*b ? Number(a.toString()+b.toString())  : 2*a*b;
}


//다른풀이
function solution(a, b) {
    let num1 = parseInt(a+""+b+"");
    let num2 = 2*a*b;
    return num1 > num2 ? num1 : num2;
}
