class Dish:
    def __init__(self, name, price, ingredents):
        self.name = name
        self.price = price
        self.ingredents = ingredents

    def cost(self):
        total = 10
        for ingredent in self.ingredents:
            total += ingredent.price
        return total

    def profit(self):
        return self.price - self.cost()


class Ingredient:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class Customer:
    def __init__(self, name, id):
        self.name = name
        self.id = id

class Restaurant:
    def __init__(self, name):
        self.name = name
        self.orders = {}

    def order_dish(self, dish, customer):
        self.orders.update({customer.id, dish})

    def print_orders(self, customer):
        total = 0
        all_orders = ''
        for order in self.orders:
            print(order)
        #     if order == customer.id:
        #         total += order.values().price
        #         all_orders += f'{order} {order[1]} - {order[2]}/n'
        # if total == 0:
        #     all_orders = f'{customer.name} has no orders!'
        # else:
        #     all_orders += f'Total: {total}'
        # print(all_orders)


restaurant = Restaurant('City Wok')

cheese = Ingredient("Cheese", 5)
pepperoni = Ingredient("Pepperoni", 5)
dough = Ingredient("Dough", 7)
lettuce = Ingredient("Lettuce", 3)
tomato = Ingredient("Tomato", 3)

pizza = Dish("Pizza", 35, [cheese, pepperoni, dough])
salad = Dish("Salad", 30, [lettuce, cheese, tomato])

pluto = Customer("Pluto", 1)
goofy = Customer("Goofy", 2)
donald = Customer("Donald", 3)

restaurant.order_dish(pizza, pluto)
restaurant.order_dish(pizza, pluto)
restaurant.order_dish(pizza, pluto)
restaurant.order_dish(pizza, pluto)
restaurant.order_dish(pizza, pluto)
restaurant.print_orders(pluto)
# restaurant.print_check()
