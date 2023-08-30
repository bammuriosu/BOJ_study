function solution(num_str) {
    return num_str.split('').reduce((acc,cur) =>
        Number(acc)+Number(cur)
    );
}

//다른풀이

function solution(num_str) {
    return [...num_str].reduce((a, c) => a + +c, 0)
}
