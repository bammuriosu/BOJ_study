N = int(input())
if N == 1:    #N이 1이라면 소인수분해 불가
    print('')

# 2부터 N까지 하나씩 나눠보기
for i in range(2, N+1):
    if N % i == 0:
        #해당 숫자로 나눌수 없을때까지 나누기
        while N % i == 0:
            print(i)
            N = N / i