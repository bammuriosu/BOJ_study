function findKim(seoul){
    var idx = seoul.indexOf('Kim');

    return "김서방은 " + idx + "에 있다";
}

//다른풀이

const solution = (arr) => `김서방은 ${arr.findIndex(s => s === 'Kim')}에 있다`;