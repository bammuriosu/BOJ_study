#BOJ_2941
#입력으로 주어진 단어가 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.

word = input()
for i in ['c=','c-','dz=','d-','lj','nj','s=','z=']: #for 도 in을 쓸수있다. 
    word = word.replace(i,'1')          #word 에서 i(c=)이 있으면 한글자 단어로 바꾼다.
print(len(word))  #알파벳 갯수를 출력