#자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오
def findPrime(N):
    if N > 1:
        for i in range(2,N):
            if N % i == 0:
                return False
            else:
                return True
    else:
        return -1

M = 1
M_list = []
while True:
    M = int(input())
    if M < 1:
        break
    else:
        M_list.append(M)

for i in range(len(M_list)):
    k = []
    for j in range(M_list[i]+1 ,2 * M_list[i] + 1):
        if findPrime(j) == True:
            k.append(j)
    print(len(k))

#미완
