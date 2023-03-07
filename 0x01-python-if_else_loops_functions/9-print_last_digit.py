#!/usr/bin/python3
def print_last_digit(number):
    if number < 0:
        ldigit = (number % -10) * -1
    if number >= 0:
        ldigit = number % 10
    print('{:d}'.format(ldigit), end="")
    return ldigit
