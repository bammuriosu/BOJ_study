'''
N = int(input())

def hansu(num):
    cnt = 0           #카운트 0초기화
    for i in range(1, num+1): #1부터 N까지
        if i <= 99:    #i가 100보다 작으면
            cnt += 1   #카운트 1추가
        else:
            #map(적용시킬함수, 적용할 값들)
            nums = list(map(int, str(i))) # i를 문자열화한걸 정수화한걸 리스트로 넣는다
            if nums[0] - nums[1] == nums[1] - nums[2]: #등차면 카운트추가
                cnt += 1
    print(cnt)
hansu(N)

'''

#BOJ_11654
#알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.
N = str(input())
print(ord(N))
