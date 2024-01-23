const Product = require("../lib/Product")

describe("Product", () => {
  describe("Instantiation", () => {
    it("should instantiate correctly", () => {
     const milk = new Product("Milk", 2.99, 12)
     expect(milk).toBeInstanceOf(Product)
     expect(milk.name).toBe("Milk")
     expect(milk.price).toBe(2.99)
     expect(milk.qty).toBe(12)
      // TODO: make sure an object is instantiated 
    })
  })

  describe("reduceQty method", () => {
    it("should reduce the qty of the product(milk) correctly", () => {
      const milk = new Product("Milk", 2.99, 12);
      milk.reduceQty();
      expect(milk.qty).toBe(11);
    })
  })
})