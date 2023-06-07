#06601:D007:N倍の文字列
input_line = int(input())
s=''
for i in range(input_line):
    s= s +'*' 
print(s)

#0602:C084:枠で囲む
input_line = input()
s_len= len(input_line)
for i in range (s_len):
    s = '+'* (s_len+2)+'\n'
    s2= '+'+ input_line +'+\n'
    s3=  '+'* (s_len+2)
print(s+s2+s3)

#0603:C016:Leet文字列
input_line = input()
print(input_line.replace('A','4').replace('E','3').replace('G','6').replace('I','1').replace('O','0').replace('S','5').replace('Z','2'))

#0604:D174:栄養の摂取
input_line = int(input())
s = input_line * 1500
print(str(s))

#D204:2にする
input_line = int(input())
result = 222 - input_line
print(str(result))

#0606:D120:鉛筆の数
input_line = input()
print(int(input_line)*12)

#D189:何周年の確認
x=int(input())
y=int(input())

s=y - x
print(s)

#0607:D146:単語の省略
v = ['a','i','u','e','o']
s = input()
print("".join([x for x in s if x not in v]))
