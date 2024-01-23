class Customer {
  constructor(name){
    this.name = name;
    this.productsPurchased = [];
    this.amountSpent = 0;
  }

  buyProduct(store, product){
    // Finds product in inventory
    // Removes product from store inventory
    // Adds price of product to amountSpent
    this.productsPurchased.push(product);
  }
}

module.exports = Customer;