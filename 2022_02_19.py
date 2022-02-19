# BOJ_1546
N = int(input()) #과목수입력받기
score = list(map(int, input().split())) # 여러값 받아서 리스트에 넣기 (가로로)
#a,b = map(int, input().split())
max_score = max(score) #최댓값 뽑기
for i in range(N): 
    score[i] = score[i]/max_score * 100 #계산
scoresum = sum(score) 
print(scoresum / N) #평균구하기
