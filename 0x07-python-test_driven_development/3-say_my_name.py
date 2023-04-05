#!/usr/bin/python3
""" Module say_my_name """


def say_my_name(first_name, last_name=""):
    """Prints a string with <first_name> and <last_name>."""
    if type(first_name) != str:
        raise TypeError("first_name must be a string")

    if type(last_name) != str:
        raise TypeError("last_name must be a string")

    print("My name is {:s} {:s}".format(first_name, last_name))

    if __name__ == "__main__":
        import doctest
        doctest.testmod()
