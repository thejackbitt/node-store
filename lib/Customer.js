class Customer {
  constructor(name){
    this.name = name;
    this.productsPurchased = [];
    this.amountSpent = 0;
  }

  buyProduct(store, product){
    // Finds product in inventory
    let storeInv = store.inventory;
    // Removes product from product inventory
    if (product.qty !== 0) {
      storeInv = storeInv.filter(item => item !== product);
      product.reduceQty();
      // Adds price of product to amountSpent
      const cost = product.givePrice();
      this.amountSpent = this.amountSpent + cost;
      this.productsPurchased.push(product.name);
    } else {
      console.log("This product is out of stock!");
    };
  };
};

module.exports = Customer;