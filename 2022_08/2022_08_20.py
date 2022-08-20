#첫째줄에 숫자의 갯수가 주어진다.
#둘째줄에 숫자들이 스페이스바로 주어진다.
#출력으로 그중에 소수가 몇개있는지 출력된다.4
n = int(input())
sosu = list(map(int, input().split()))
def prime(num):
    if num == 1:
        return False
    elif num == 2:
        return True
    for i in range(2, num):
        if num % i == 0:
            return False
    return True
count = 0
for i in sosu:
    if prime(i):
        count += 1
print(count)