#include <stdio.h>
main()
{
    int a = 5, b = 10, c = 15, d = 30, result;
    result = a * 3 + b > d || c - b / a <= d && 1;    // * /가 먼저 계산되고 + -가 계산되고 참 거짓이 계산됨. 다 참이므로 1이 저장된다.
    printf("%d\n", result);
}