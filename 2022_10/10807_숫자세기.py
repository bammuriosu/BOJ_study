N = int(input())
N_list = list(map(int, input().split())) #평소쓰던 map앞에 list를 써준다.
v = int(input())
tmp = 0
for i in range(N):
    if N_list[i] == v:
        tmp += tmp
print(tmp)
#이것도 맞는데 정답은

N = int(input())
N_list = list(map(int, input().split()))
v = int(input())
print(N_list.count(v))