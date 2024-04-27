#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int* solution(int n) {

    int* answer = (int*)malloc(sizeof(int) * ((n+1)/2));  //n절반크기의 메모리 크기 할당
    
    for(int i = 1; i <= n; i+=2){
        answer[i/2] = i;  //n보다 작은 홀수만 삽입
    }
    return answer;
}