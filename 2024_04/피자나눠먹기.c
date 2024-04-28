#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
 
int solution(int slice, int n) {
    int answer = 0;
    answer= n / slice; //사람수 나누기 조각수의 몫을 대입하고
    if(n%slice>0)     //나머지가 0보다 크면 1씩 더한다
    {
        answer+=1;
    }
    return answer;
}