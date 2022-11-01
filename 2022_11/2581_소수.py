#M과 N사이 소수들의 합, 소수중 최소값을 작성하시오
M = int(input())
N = int(input())

sosu_list = []
for num in range(M, N+1): # M부터 N까지
    error = 0
    if num > 1:
        for i in range(2, num): #2부터 num-1까지
            if num % i == 0:  # 소수가 아닌경우 나누어떨어짐
                error += 1
                break #2부터 num-1까지 나눈 몫이 0이면 error가 증가하고 for문을 끝냄
        if error == 0:
            sosu_list.append(num) #error가 없으면 소수리스트에 추가

if len(sosu_list) > 0:
    print(sum(sosu_list))
    print(min(sosu_list))
else:
    print(-1)