#boj_1978
import math
# 제곱근까지만 보고 소수를 판별하는 함수
def is_prime_number(x):
    # 2부터 x의 제곱근까지의 모든 수를 확인하며
    for i in range(2, int(math.sqrt(x))+1):
        if x % i == 0:
        
            return False
    return True

N = int(input())
a = list(map(int, input().split())) 
cnt = 0
for i in a:
    if is_prime_number(i) == True:
        cnt += 1
    else:
        continue

print(cnt)
#실패!