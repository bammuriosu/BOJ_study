n = int(input())
nums = []
for i in range(n):
    nums.append(int(input())) #엔터키로 리스트입력받기
nums.sort()
for j in range(n):
    print(nums[j])