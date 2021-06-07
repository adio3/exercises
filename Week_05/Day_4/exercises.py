# Even Numbers
print('Even Numbers')

def filter_even_numbers(num_list):
    new_list = []
    for num in num_list:
        if num%2 == 0:
            new_list.append(num)
    return new_list

print(filter_even_numbers([1,2,3,4,5,6,7,8,9,10]))

#Square Elements
print('Square Elements')

def square_numbers(num_list):
    new_list = []
    for num in num_list:
        new_list.append(num*num)
    return new_list

print(square_numbers([1,2,3,4,5,6,7,8,9,10]))

#Squared Even Numbers
print('Squared Even Numbers')

def square_even_numbers(num_list):
    def is_even_number(num):
        if num%2 == 0:
            return True
        else:
            return False
    def square_number(num):
        return num*num

    filtered_list = filter(is_even_number, num_list)
    squared_list = list(map(square_number, filtered_list))
    return squared_list

print(square_even_numbers([1,2,3,4,5,6,7,8,9,10]))

#Find Certain Numbers
print('Find Certain Numbers')

orders = [

    {
        'id': 'order_001',
        'item': 'Introduction to Python',
        'quantity': 1,
        'price_per_item': 32,
    },
    {
        'id': 'order_002',
        'item': 'Advanced Python',
        'quantity': 3,
        'price_per_item': 40,
    },
    {
        'id': 'order_003',
        'item': 'Python web frameworks',
        'quantity': 2,
        'price_per_item': 51,
    },
]

def compute_totals(order_list):
    totals_list = []
    for order in order_list:
        if order['quantity']*order['price_per_item'] < 100:
            totals_list.append((order['id'], order['quantity']*order['price_per_item']+10))
        else:
            totals_list.append((order['id'], order['quantity'] * order['price_per_item']))
    return totals_list

totals = compute_totals(orders)
print(totals)