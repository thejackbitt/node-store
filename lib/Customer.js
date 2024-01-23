class Customer {
  constructor(name){
    this.name = name;
    this.productsPurchased = [];
    this.amountSpent = 0;
  }

  buyProduct(store, product){
    // Finds product in inventory
    const storeInv = store.inventory;

    // Removes product from store inventory
    if (product.qty !== 0) {
      product.qty--;
      // Adds price of product to amountSpent
      this.amountSpent = amountSpent + product.price;
      this.productsPurchased.push(product);
    } else {
      console.log("This product is out of stock!");
    };
  };
};

module.exports = Customer;