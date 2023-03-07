#!/usr/bin/python3
def remove_char_at(str, n):
i = 0
cs = ""
for char in str:
if i != n:
cs += char
i += 1
return (cs)
