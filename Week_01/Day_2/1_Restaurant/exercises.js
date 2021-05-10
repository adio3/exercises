"use strict";

class Ingredient {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Dish {
  constructor(name, price, ingredients, customerId) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.customerId = customerId;
  }
  cost() {
    let totalCost = 10;
    this.ingredients.forEach(
      (currentValue) => (totalCost = totalCost + currentValue.price)
    );
    return totalCost;
  }
  profit() {
    return this.price - this.cost();
  }
}

class Restaurant {
  constructor(order) {
    this.order = order;
  }
  orderArray = [];
  orderDish(dish, customer) {
    let newDish = Object.create(dish);
    newDish.customerId = customer.id;
    this.orderArray.push(newDish);
  }
  printOrders() {
    this.orderArray.forEach((currentValue, index) =>
      console.log(`Order #${index}: ${currentValue.name}`)
    );
  }
  printCheck(customer) {
    console.log(customer.name);

    this.orderArray.forEach((currentValue, index) => {
      if (currentValue.customerId === customer.id) {
        console.log(
          `Order #${index}: ${currentValue.name} - ${currentValue.price}`
        );
      }
    });
    let total = 0;
    this.orderArray.forEach((currentValue) => {
      if (currentValue.customerId === customer.id) {
        total += currentValue.price;
      }
    });
    console.log(`Total: ${total}`);
  }
  totalProfit() {
    let totalProfit = 0;
    this.orderArray.forEach((currentValue) => {
      totalProfit += currentValue.profit();
    });
    console.log(`The total profit is: ${totalProfit}`);
  }
  profitOf(customer) {
    let totalProfitOf = 0;
    this.orderArray.forEach((currentValue) => {
      if (currentValue.customerId === customer.id)
        totalProfitOf += currentValue.profit();
    });
    console.log(`The total profit of ${customer.name} is: ${totalProfitOf}`);
  }
}

let restaurant = new Restaurant();

const cheese = new Ingredient("Cheese", 5);
const pepperoni = new Ingredient("Pepperoni", 5);
const dough = new Ingredient("Dough", 7);
const lettuce = new Ingredient("Lettuce", 3);
const tomato = new Ingredient("Tomato", 4);

const pizza = new Dish("Pizza", 35, [cheese, pepperoni, dough]);
const salad = new Dish("Salad", 30, [lettuce, cheese, tomato]);

const pluto = {
  name: "Pluto",
  id: 1,
};
const goofy = {
  name: "Goofy",
  id: 2,
};

// restaurant.orderDish(pizza);
// restaurant.orderDish(salad);
// restaurant.printOrders();
// console.log(pizza.cost())
// console.log(pizza.profit()) // => 8
// console.log(salad.profit())
// restaurant.printCheck()

restaurant.orderDish(pizza, goofy);
restaurant.printCheck(goofy);
restaurant.orderDish(pizza, pluto);
restaurant.orderDish(salad, pluto);
restaurant.printCheck(pluto);
restaurant.totalProfit();
restaurant.profitOf(pluto);

// console.log(pizza.profit())
// console.log(salad.profit())
