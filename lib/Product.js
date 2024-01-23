class Product {
  constructor(name, price, qty){
this.name = name
this.price = price
this.qty = qty
  }

  reduceQty(){
this.qty -= 1
  }

  givePrice(){
return this.price
  }
}

module.exports = Product;