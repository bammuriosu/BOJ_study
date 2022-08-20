#0층은 1, 2, 3, ... n 명까지 있고 1층은 1, 1+2, 1+2+3, ... ,1+...n 으로 아래 층의 n 호까지의 합이라는 규칙
# DP
T = int(input()) #테스트케이스
 
for _ in range(T):
    k = int(input())
    n = int(input())
    floor = [i for i in range(1, n+1)]
 
    for _ in range(k):
        for i in range(1, n):
            floor[i] += floor[i-1]
    print(floor[-1])
 
# 재귀
def check(a, b):
    if not a:
        return b
    if b == 1:
        return 1
    return check(a, b-1) + check(a-1, b)
 
for _ in range(int(input())):
    k = int(input())
    n = int(input())
    print(check(k, n))