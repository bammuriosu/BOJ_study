#첫째줄에 숫자의 갯수가 주어진다.
#둘째줄에 숫자들이 스페이스바로 주어진다.
#출력으로 그중에 소수가 몇개있는지 출력된다.
n = int(input()) #숫자개수
sosu = list(map(int, input().split())) #리스트로 숫자들받기
def prime(num): #함수정의
    if num == 1:
        return False #숫자 1은 소수아님
    elif num == 2:
        return True #2는 소수임
    for i in range(2, num): #2부터 숫자까지
        if num % i == 0: #그걸로 나누어 떨어지면
            return False #그건 비소수다.
    return True #아님 소수다
count = 0 #카운트 0
for i in sosu: #리스트내 반복
    if prime(i): #True이면
        count += 1 #count추가
print(count)