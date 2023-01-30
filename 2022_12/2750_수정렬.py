#N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
n = int(input())
nums = []
for i in range(n):
    k = int(input())
    nums.append(k)
nums.sort()
for j in range(n):
    print(nums[j])
