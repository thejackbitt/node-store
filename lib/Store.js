// The Store class should have these properties:

//   name                  the name of the store
//   opens                 what time the store opens
//   closes                what time the store closes 
//   inventory = []        an array of products available in the store
//   shoppersClub = [];    an array of customers who order stuff 

// and these methods:

//   displayWelcome()      console.logs a welcome message w/ name of the store
//   areYouOpen(hour)      if the hour passed in is between the open time and the close time, 
//                         return true; otherwise false 
//   addProduct(prod)      adds the product object passed in to the store inventory 
//   addShopper(shopper)   adds a customer object passed in to the shoppers club array

class Store {
  constructor(name, opens, closes){
      this.name = name;
      this.opens = opens;
      this.closes = closes;
      this.inventory = [];
      this.shoppersClub =[];
  }

  displayWelcome(){
    return `Welocome to ${this.name}!`;
  }

  areYouOpen(hour){
    if( 9 < hour < 16 ){
      return true;
    }else{false}

  }

  addProduct(prod){
    this.inventory.push(prod);

  }

  addShopper(shopper){
    this.shoppersClub.push(shopper);

  }
}


module.exports = Store;