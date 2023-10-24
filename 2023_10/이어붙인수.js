function solution(num_list) {
    let hol ='';
    let jjak = '';
    
    for(let i = 1; i<=num_list.length; i++){
        if(i % 2 === 1){
          hol += num_list[i-1];
        } 
        else {jjak += num_list[i-1]}
    }
    return Number(hol) + Number(jjak)
}

//다른풀이
function solution(num_list) {
    let numA="",numB="";
    for(let i = 0 ; i < num_list.length ; i++){
        if(num_list[i]%2===0)
            numA+= num_list[i];
        else
            numB+= num_list[i];
    }
    return +numA + +numB;
}