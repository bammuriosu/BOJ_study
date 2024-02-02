function solution(people, limit) {
    let count = 0;
    let arr = [];
    let sortedPeople = people.sort((a,b) => a-b);
    while(sortedPeople.length > 0){
        //가장 무거운 사람 빼고
        let heaviest = sortedPeople.pop();
        //가장 가벼운사람과 합했을때 limit보다 작으면 가벼운사람도 빼고
        if(sortedPeople.length > 0 && heaviest + sortedPeople[0] <= limit){
            sortedPeople.shift();
        }
        count++;
    }
    return count;
}

//다른풀이
function solution(people, limit) {
    var answer =0;
    people.sort ((a,b) => b-a)  
    for (var i=0, j= people.length - 1; i <=j ; i++ ) {
        if (people[i] + people [j] <= limit )
            j--
        answer ++
    }
    return answer;
}