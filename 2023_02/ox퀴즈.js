function solution(quiz) {
    let ans = [];
    
    quiz.forEach((item) => {
        const oneQuiz = item.split(" ");
        
        const X = Number(oneQuiz[0]);
        const Y = Number(oneQuiz[2]);
        
        let calc = 0;
        
        if(oneQuiz[1] === "+"){
            calc = X + Y;
        }
        
        if(oneQuiz[1] === "-"){
            calc = X - Y;
        }
        
        const result = Number(oneQuiz[4]);
        
        if(calc === result){
            ans.push("O");
        }
        
        if(calc !== result){
            ans.push("X");
        }
    })
    
    return ans;
}

//다른풀이

function solution(quiz) {
  return quiz
    .map((el) => el.split(" = "))
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X";
    });
}

