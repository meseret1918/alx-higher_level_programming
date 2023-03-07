#!/usr/bin/python3
def uppercase(str):
    for i in str:
        j = ord(i)
        if (96 < j < 123):
            j = j - 32
        print('{:c}'.format(j), end="")
    print(end='\n')
