# boj_2839
# 설탕공장, 3키로 5키로 봉지, 최대한 봉지를 적게, 못만들면 -1출력
'''
N = int(input())
cnt = 0
if N >= 5:
    N -= 5
    cnt += 1

if N < 5 and N >= 3:
    N -= 3
    cnt += 1

if N > 0 :
    cnt = -1

print(cnt)
'''
N = int(input())
cnt = 0

while N >= 0:
    if N % 5 == 0: #5로 딱떨어진다면
        cnt += int(N // 5) #나누기 연산 후 소수점 이하의 수를 버리고, 정수 부분의 수만 구함
        print(cnt)
        break

    N -= 3
    cnt += 1  #5로 안나눠떨어지면 3을빼고 카운트 1더한다. 그럼 5로나눠떨어질것이다.

else: 
    print(-1) #이도저도아니면 -1 프린트