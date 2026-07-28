// Pizza Class
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class Pizza {
  constructor(customerName, phone, email, size, crust, sauce, cheeses, toppings, quantity, instructions) {
    this.customerName = customerName;
    this.phone = phone;
    this.email = email || 'Not provided';
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.cheeses = cheeses.length > 0 ? cheeses : ['No extra cheese selected'];
    this.toppings = toppings;
    this.quantity = quantity;
    this.instructions = instructions || 'None';
  }

  getDescription() {
    // Turn the arrays of cheeses and toppings into readable lists
    const cheeseList = this.cheeses.join(', ');
    const toppingList = this.toppings.join(', ');

    // Return a multi-line string with all the order details
    return `Thank you, ${this.customerName}!

    Your Order Details:
• Quantity: ${this.quantity}
• Size: ${this.size}
• Crust: ${this.crust}
• Sauce: ${this.sauce}
• Cheese: ${cheeseList}
• Toppings: ${toppingList}
• Special Instructions: ${this.instructions}

Contact: ${this.phone} | ${this.email}

Your delicious pizza is being prepared! Enjoy! 🍕`;
  }
}