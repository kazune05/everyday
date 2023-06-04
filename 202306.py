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