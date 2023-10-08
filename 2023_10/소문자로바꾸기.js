function solution(myString) {
    return myString.toLowerCase();
}

//다른풀이
function solution(myString) {
    var answer = '';

    for(let i = 0; i < myString.length; i ++){

        const pointer = myString[i];

        if(pointer === pointer.toUpperCase()){

               answer += pointer.toLowerCase();

        }else{
            answer += pointer;
        }

    }

    return answer;
}