// 헝가리안 표기법 : 변수명 작성 시 변수의 자료형을 알수있도록 하는 방법. int형은 i_inputA처럼 짓는다.

// %d 정수형, 10진수 입출력에 사용
// %o 정수형, 8진수 입출력에 사용
// %x 정수형, 16진수 입출력에 사용
// %c 문자 입출력에 사용
// %s 문자열 입출력에 사용
// %f 실수형 입출력, 소수점 6자리가 기본으로 출력됨'

// \n 커서를 다음줄의 처음으로 이동
// \t 커서를 일정간격 띄움
// \0 널문자 출력

// sizeof 예시
#include <stdio.h>

int main()
{
    printf("char: %d, short: %d, int: %d, long: %d, long long: %d\n",
        sizeof(char),        // 1: sizeof로 char 자료형의 크기를 구함
        sizeof(short),       // 2: sizeof로 short 자료형의 크기를 구함
        sizeof(int),         // 4: sizeof로 int 자료형의 크기를 구함
        sizeof(long),        // 4: sizeof로 long 자료형의 크기를 구함
        sizeof(long long)    // 8: sizeof로 long long 자료형의 크기를 구함
    );

    return 0;
}

# include <stdio.h>
main()
{
    int i = 10, j = 10, k = 30;
    i /= j;      // 10 / 10 한 1을 i에 대입
    j -= i;      // 10 - 1 한 9를 j에 대입
    k %= j;      // 30 % 9 한 3을 k에 대입
    printf("%d, %d, %d\n", i, j, k);  // "1, 9, 3"
}