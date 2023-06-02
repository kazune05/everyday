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