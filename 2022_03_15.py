#BOJ_1712
#고정비용A, 가변비용B 판매가C
#총수입>총비용인 지점을 손익분기점이라 한다.
#손익분기점을 구하는 프로그램짜라
'''
A,B,C = map(int, input().split())
N = 0 #판매량
cost = A + (N * B)
profit = N * C
while profit < cost:
    N += 1
    if N == 21000000:
        N = -1
        break
print(N)
#실패
'''
A, B, C = map(int, input().split())

if B>=C:
    print(-1) #가변비용이 판매가보다 높으면 손익분기 불가
else:
    print(int(A/(C-B)+1)) #고정비용/(판매가-가변비용)+1 대 생산했을때부터 수익이 나기시작한다.