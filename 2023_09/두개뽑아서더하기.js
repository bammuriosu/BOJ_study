function solution(numbers) {
    // for문돌려서 나빼고 다른것들이랑 더해서 새배열에 넣고
    // set하고 sort해서 보내
    let answer = [];
    for(let i = 0; i<numbers.length; i++){
        for(let j = 0; j<numbers.length; j++){
            if(i === j) continue;
            answer.push(numbers[i] + numbers[j]);
        }
    }
    let answer2 = new Set(answer);
    return [...answer2].sort((a,b) => a-b);
}

//다른풀이
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}