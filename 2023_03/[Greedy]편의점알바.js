function partTimeJob(k) {
    // [1, 5, 10, 50, 100, 500]
    // 최소한의 동전으로 거스름돈 k를 만들어라
    // 동전개수를 리턴
    // k에서 500원 빼고 돌리고돌리고
    let money = k;
    let coinNumber = 0;
    while(money>0){
      if(money>=500){
        money -= 500;
        coinNumber++
      }
      else if(money>=100){
        money -= 100;
        coinNumber++
      }
      else if(money>=50){
        money -= 50;
        coinNumber++
      }
      else if(money>=10){
        money -= 10;
        coinNumber++
      }
      else if(money>=5){
        money -= 5;
        coinNumber++
      }  
      else {
        money -= 1;
        coinNumber++
      }    
    }
    return coinNumber;
  }

//다른풀이
function partTimeJob(k) {
    let result = 0;
    const wallet = [500, 100, 50, 10, 5, 1];
    for(let i = 0; i < wallet.length; i++) {
      if(k > 0) {
        const sum = Math.floor(k / wallet[i]);
        result += sum;
        k = k - (wallet[i] * sum);
      }
    }
    return result;
  }
  