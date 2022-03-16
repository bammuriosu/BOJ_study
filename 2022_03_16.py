#BOJ_2292
#벌집, 본인포함
'''
N = int(input())
room = 1
if N == 1:
    print(room)
elif 2<=N<=7:
    print(room+1)
elif 8<=N<=8+11:
    print(room+2)
#실패
'''
#방을 1개 거치는숫자 1개 2개거치는숫자 6개 3개 12개...
n = int(input())
cnt = 1 #초기값
rooms = 1
while n > rooms: 
    rooms += 6*cnt
    cnt += 1
print(cnt)