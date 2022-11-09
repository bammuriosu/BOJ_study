import sys
n = int(input())
nums = []
for i in range(n):
    nums.append(int(sys.stdin.readline()))
nums.sort()
for j in range(n):
    print(nums[j])

#메모리초과


import sys

n = int(sys.stdin.readline())
num_list = [0] * 10001

for _ in range(n):
    num_list[int(sys.stdin.readline())] += 1

for i in range(10001):
    if num_list[i] != 0:
        for j in range(num_list[i]):
            print(i)