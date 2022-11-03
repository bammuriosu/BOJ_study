#M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.
M,N = map(int, input().split())

sosu_list = []
for num in range(M, N+1):
    error = 0
    if num > 1:
        for i in range(2, num): #2부터 자기자신-1 까지
            if num % i == 0: #나누어떨어진다면
                error += 1 #소수가 아님
                break
        if error == 0: 
            sosu_list.append(num)

if len(sosu_list) > 0:
    for j in range(0, len(sosu_list)):
        print(sosu_list[j])
else:
    print(-1)

#시간초과, 진짜답
def isPrime(num):
    if num==1:
        return False
    else:
        for i in range(2, int(num**0.5)+1):
            if num%i == 0:
                return False
        return True

M, N = map(int, input().split())

for i in range(M, N+1):
    if isPrime(i):
        print(i)























