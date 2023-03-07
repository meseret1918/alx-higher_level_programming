#!/usr/bin/python3
for number1 in range(0, 10):
    for number2 in range(1, 10):
        if number1 == 8 and number2 == 9:
            print("{:d}{:d}".format(number1, number2))
            break
        if number2 > number1:
            print("{:d}{:d}, ".format(number1, number2), end='')
