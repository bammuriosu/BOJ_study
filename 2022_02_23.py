#BOJ_4673
#셀프 넘버는 1949년 인도 수학자 D.R. Kaprekar가 이름 붙였다. 양의 정수 n에 대해서 d(n)을 n과 n의 각 자리수를 더하는 함수라고 정의하자. 예를 들어, d(75) = 75+7+5 = 87이다.
#n을 d(n)의 생성자라고 한다.101은 생성자가 2개(91과 100) 있다. 
#생성자가 없는 셀프넘버를 한줄에 하나씩 출력하는 프로그램을 작성하시오
#소숫점 버리기 17//3 = 5
def not_self_number(num):  #셀프넘버 아닌것을 리턴한다
    not_self_num = num     #받은 num복사
    while num != 0:        # 반복문돌림
        not_self_num = not_self_num + num%10 #123이라면 123 + 3하고 다음 반복문에서 126 + 2하고 지막으로 128 + 1 = 129 num은 123에서 12에서 1에서 0이됨 
        num = num//10  #일의자리(끝자리) 잘라냄
    return not_self_num #셀프넘버아닌것을 리턴

result = []

for i in list(range(1,10001)): #1부터 10000까지 있는 리스트에서 
    result.append(not_self_number(i)) #result 리스트에 셀프넘버 아닌것들을 append
    if i not in result:  #1부터 만까지의 i가 result리스트에 없다면
        print(i)         #print한다
