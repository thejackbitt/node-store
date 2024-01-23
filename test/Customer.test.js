const Customer = require("../lib/Customer")
const Store = require("../lib/Store")
const Product = require("../lib/Product")

describe("Customer", () => {
  describe("Instantiation", () => {
    it("should instantiate correctly", () => {
      const customer = new Customer();
      expect(customer).tobeDefined();
      expect(customer.amountSpent).toBe(0);
    })
  })

  describe("buyProduct", () => {
    it("should handle a product purchase correctly", () => {
      const store = new Store("Dizzy Store", 8, 12);
      const product = new Product("Widget", 22, 50);
      const customer = new Customer("John Doe");
      
      customer.buyProduct(store, product)

      expect(product.qty).toBeLessThan(50);
      expect(customer.amountSpent).toBeMoreThan(0);
    })
  })
})