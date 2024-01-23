const inquirer = require("inquirer");
const Store = require("./lib/Store");
const Product = require("./lib/Product");
const Customer = require("./lib/Customer");

// let's set up some objects for use
const widget1 = new Product("Widget 2000", 20, 50);
const widget2 = new Product("Widget 5000", 50, 20);
const widget3 = new Product("Widget 8000", 100, 10);

const currentStore = new Store("Gary Mart", 9, 16, [widget1, widget2, widget3]);

// Use inquirer to welcome the use to the store, and show a list of products for then to choose from
function start() {
  console.log(currentStore.displayWelcome());

  inquirer
    .prompt([
      {
        type: "list",
        message: "What product would you like to buy?",
        choices: [
          { name: widget1.name,
            value: widget1
          },
          { name: widget2.name,
            value: widget2
          },
          { name: widget3.name,
            value: widget3
          },
        ],
        name: "selectedProduct",
      },
      {
        type: "input",
        message: "Great choice. What is your name?",
        name: "customerName",
      },
    ])
    .then((response) => {
      const newCustomer = new Customer(response.customerName);
      currentStore.addShopper(newCustomer)
      newCustomer.buyProduct(currentStore, response.selectedProduct);
      console.log(currentStore.shoppersClub)
    });
}

// after the customer chooses a product, get their name
// create a customer object; add customer to the shoppers club


// use the buy method so the user buy the product
// send them back to the start menu
function buyProduct() {
  
}


start();
