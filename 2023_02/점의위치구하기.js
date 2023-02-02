function solution(dot) {
    // 점이 해당하는 사분면 리턴
    // 첫번째>0 두번째>0 1
    // 첫번째<0 두번째>0 2
    // 첫번째<0 두번째<0 3
    // 첫번째>0 두번째<0 4
    let result = dot[0]>0 && dot[1]>0 ? 1 
                : dot[0]<0 && dot[1]>0 ? 2
                : dot[0]<0 && dot[1]<0 ? 3
                : dot[0]>0 && dot[1]<0 ? 4
                : null;
    return result;

}

//다른풀이

function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}