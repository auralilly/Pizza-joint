// Pizza Class
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