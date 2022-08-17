#BOJ_4344
#각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

n = int(input()) #테스트 개수 입력받음

for i in range(n): 
  input_score = list(map(int, input().split(' '))) #한줄로 입력받음

  avg = sum(input_score[1:])/input_score[0] #두번째부터 끝까지를 더한것 / 학생수
  cnt = 0 #카운트 = 0
# 이제 평균을 넘는 학생의 비율을 재보자
  for score in input_score[1:]: # 두번째부터 (점수부터)
    if score > avg: #점수가 평균보다 높으면
      cnt += 1     # 카운트 1추가
  rate = cnt / input_score[0] * 100  #비율 = 카운트 / 사람수 * 100
  print(f'{rate:.3f}%') #소숫점 3째까지 출력