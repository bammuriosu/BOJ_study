nums = []
tmp = 0
for i in range(5):
    k = int(input())
    nums.append(k)
    tmp = tmp + nums[i]

print(tmp//5) #몫구하기
nums.sort()
print(nums[2])