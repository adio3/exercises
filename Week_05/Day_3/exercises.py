from random import random
import math

# 1. String Checker
print("1. String Checker")

def is_string(arg):
    return type(arg) == str


print(is_string('hello'))                    # True
print(is_string(['hello']))                  # False
print(is_string('this is a long sentence'))  # True
print(is_string({'a': 2}))                   # False

# 2. Spaces & Digits
print('2. Spaces & Digits')

def is_only_string(arg):
    if(type(arg) == str):
        return arg.isalpha()
    else:
        return False

print(is_only_string('11'))                       # False
print(is_only_string('hello'))
print(is_only_string(['hello']))                  # ? Please handle this case!! Should return False
print(is_only_string('this is a long sentence'))  # False
print(is_only_string({'a': 2}))                   # ? Please handle this case!! Should return False

# 3. Number yooo?
print('3. Number yooo?')

def is_alphanumeric(arg):
    if (type(arg) == str):
        return arg.isdecimal()
    else:
        return False


print(is_alphanumeric('11'))                       # True
print(is_alphanumeric(['hello']))                  # False
print(is_alphanumeric('this is a long sentence'))  # False
print(is_alphanumeric({'a': 2}))                   # False
print(is_alphanumeric("this is string....!!!"))    # False

#4. Lists & Tuples
print('4. Lists & Tuples')

def is_list_or_tuple(arg):
    if (type(arg) == list or type(arg) == tuple):
        return True
    else:
        return False

print(is_list_or_tuple('hello'))      # False
print(is_list_or_tuple(['hello']))    # True
print(is_list_or_tuple([2, {}, 10]))  # True
print(is_list_or_tuple({'a': 2}))     # False
print(is_list_or_tuple((1, 2)))       # True
print(is_list_or_tuple(set()))        # False

#5. Same Type
print('5. Same Type')

def are_same_type(arg):
    argtype = ''
    for i in arg:
        if (argtype == ''):
            argtype = type(i)
        elif (argtype != type(i)):
            return False
    return True

print(are_same_type(['hello', 'world', 'long sentence']))  # True
print(are_same_type([1, 2, 9, 10]))                        # True
print(are_same_type([['hello'], 'hello', ['bye']]))        # False
print(are_same_type([['hello'], [1, 2, 3], [{'a': 2}]]))   # True
print(are_same_type([['hello'], set('hello')]))            # False

#6. Sort and Remove Duplicates
print('6. Sort and Remove Duplicates')

a = 'xyaabbbccccdefww'
b = 'xxxxyyyyabklmopq'
x = 'abcdefghijklmnopqrstuvwxyz'

def intersection(arg1, arg2):
    list = []
    for i in arg1 and arg2:
        if i not in list:
            list.append(i)
    list.sort()
    return list


print(intersection(a, b))  # abcdefklmopqwxy
print(intersection(a, x))  # abcdefghijklmnopqrstuvwxyz

#7. Digits Converter
print('7. Digits Converter')

def convert(arg):
    reveredlist = []
    for i in str(arg):
        reveredlist.append(int(i))
    reveredlist.sort(reverse = True)
    return reveredlist

print(convert(429563))  # [9, 6, 5, 4, 3, 2]
print(convert(324))     # [4, 3, 2]

#8. Count Repetitions!
print('8. Count Repetitions!')

names = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']

def count_repetition(namelist):
    dict = {}
    for name in namelist:
        if name in dict:
            dict[name] += 1
        else:
            dict[name] = 1
    return dict

print(count_repetition(names))
# {'kerouac': 2, 'fante': 3, 'buk': 2, 'hemingway': 1, 'hornby': 1}

#9. Cat and Mouse
print('9. Cat and Mouse')

def is_caught(catch):
    cat = False
    dist = 0
    for p in catch:
        if p == 'C':
            cat = True
        if cat == True and p == '.':
            dist += 1
        if p == 'm':
            if dist < 3:
                return True
            else:
                return False

print(is_caught('C.....m'))   # False
print(is_caught('C..m'))      # True
print(is_caught('..C..m'))    # True
print(is_caught('...C...m'))  # False
print(is_caught('C.m'))       # True

#10. Split the Bill
print('10. Split the Bill')

group = {
    'Amy': 20,
    'Bill': 15,
    'Chris': 10
}

def split_the_bill(groupdict):
    middle = 0
    sharers = 0
    for payed in groupdict.values():
        print(payed)
        middle += payed
        sharers += 1
    middle = int(middle / sharers)
    for sharer in groupdict:
        groupdict[sharer] = middle - groupdict[sharer]
    return groupdict


print(split_the_bill(group))  # { 'Amy': -5, 'Bill': 0, 'Chris': 5 }

#11. Exponentiation
print('11. Exponentiation')

def exp_recursive(b1, n1, b2='', n2=''):
    if n1 == 0:
        return 1
    elif n1 == 1:
        return b1
    elif n2 == '':
        b2 = b1
        n2 = n1-1
    elif n2 == 0:
        return b1
    b1 = b1 * b2
    n2 -= 1
    return exp_recursive(b1, n1, b2, n2)


print(exp_recursive(5, 3))  # 125
print(exp_recursive(2, 4))  # 16
print(exp_recursive(5, 1))  # 5
print(exp_recursive(6, 0))  # 1

# 12. Zero Sum
print('12. Zero Sum')

def zero_sum(arr):
    new_arr = []
    for index, num in enumerate(arr):
        for index2, num2 in enumerate(arr):
            if (num + num2) == 0:
                new_arr.append([index, index2])
                arr[index] = 99
                arr[index2] = 99
    return new_arr

print(zero_sum([1, 5, 0, -5, 3, -1]))  # [[0, 5], [1, 3], [2, 2]]
print(zero_sum([1, -1]))               # [[0, 1]]
print(zero_sum([0, 4, 3, 5]))          # [[0, 0]]

# 13. Letter Counter
print('13. Letter Counter')

def letter_counter():
    sentence = input('Enter Sentence to count: ')
    upper_count = 0
    lower_count = 0
    for letter in sentence:
        if letter.isupper():
            upper_count += 1
        elif letter.islower():
            lower_count += 1
    print(f'UPPER CASE {upper_count}')
    print(f'LOWER CASE {lower_count}')

# letter_counter()

# Hello World!
# UPPER CASE 2
# LOWER CASE 8

# 14. Nestception
print('14. Nestception')

def new_dict(arr):
    dict = {}
    for numb in reversed(arr):
        dict = {numb: dict}
    return dict

print(new_dict([1, 2, 3, 4, 5])) # {1: {2: {3: {4: {5: {}}}}}}

# 15. Bank account
print('15. Bank account')

def bank(acc = 0):
    op = input('Operation and amount: ')
    if op[0] == 'D':
        acc += int(op[2:len(op)])
    elif op[0] == 'W':
        acc -= int(op[2:len(op)])
    else:
        print(acc)
        return
    bank(acc)

# bank()

# 16. Insane dict
print('16. Insane dict')

def nt_dictionary(num):
    if 101 > num > 10:
        dict = {}
        for i in range(num):
            key = math.floor(random()*1000)
            value = key * key
            dict[key] = value
        return dict


print(nt_dictionary(20))
print('Length', len(nt_dictionary(20)))

# 17. Number to Text
print('17. Number to Text')

def write_number(num):
    num_dict = {
        1: 'one',
        2: 'two',
        3: 'tree',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        15: 'fivteen',
        '1X': 'teen',
        20: 'twenty',
        30: 'thirty',
        50: 'fifty',
    }
    if num < 16:
        print(num_dict[num])
    elif 20 > num > 15 or num == 14:
        print(num_dict[int(str(num)[1])] + num_dict['1X'])
    elif int(str(num)[0]) == 2 or int(str(num)[0]) == 3 or int(str(num)[0]) == 5:
        print(num_dict[int(str(num)[0])*10] + '-' + num_dict[int(str(num)[1])])
    else:
        print(num_dict[int(str(num)[0])] + 'ty' + '-' + num_dict[int(str(num)[1])])

write_number(11)  # "eleven"
write_number(2)   # "two"
write_number(32)   # "thirty-two"
write_number(47)  # "fourty-seven"