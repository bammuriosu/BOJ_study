# include <stdio.h> //입출력 관련된 함수를 정의한 헤더파일
main()
{
    int i, j, k; // 정수 변수 선언
    scanf("%d %d", &i, &j); // 키보드로 입력받겠다는 scanf, 10진수 두개를 입력받겠다
    k = i + j;
    printf("%d\n", k); //화면에 출력하겠다는 printf, 10진수로 k를 출력하고 한줄 띄우겠다
}