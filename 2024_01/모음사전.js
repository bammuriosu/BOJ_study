function solution(word) {
    // aeiou > 01234 대체하고 5진법사전 만들어서 indexOf 
    let dictionary = [];
    let obj = { A:0, E:1, I:2, O:3, U:4 }
    let numWord = word.split('').map((el) => obj[el]).join('');
    for (let i =0; i<=parseInt("44444",5); i++){
        dictionary.push(i.toString(5));
    }
    return dictionary.indexOf(numWord)
}

//다른풀이
function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const counts = [781, 156, 31, 6, 1]; // 각 자리수별 가능한 단어 수
    
    let answer = 0;
    for (let i = 0; i < word.length; i++) {
        answer += vowels.indexOf(word[i]) * counts[i] + 1; // 해당 자리의 알파벳 인덱스에 따른 영향을 더해줌
    }
    
    return answer;
}