n = int(input())
nums = []
for i in range(n):
    nums.append(int(input())) #엔터키로 리스트입력받기
nums.sort()
for j in range(n):
    print(nums[j])

#input() 이 sys.stdin.readline() 보다 느림

import sys
n = int(input())
nums = []
for i in range(n):
    nums.append(int(sys.stdin.readline())) #엔터키로 리스트입력받기
nums.sort()
for j in range(n):
    print(nums[j])


