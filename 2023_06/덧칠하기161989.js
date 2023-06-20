function solution(n, m, section) {
    
    let arch = new Array(n);

    for (let i = 0; i < n; i++)
        arch[i] = 1;

    for (let i of section)
        arch[i-1] = 0;

    let cnt = 0;
    
    for (let i = 0; i < arch.length; i++){
        if(arch[i] == 0){
            if(i+m < arch.length){
                for(let j = 0; j < i + m; j++)
                    arch[j] = 1;
                i = i + m - 1;
            }
            else{
                for(let j = 0; j < arch.length; j++)
                    arch[j] = 1;
            }
            cnt++;
        }
    }

    return cnt;
}