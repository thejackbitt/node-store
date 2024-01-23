const Product = require("../lib/Product")
const Store = require("../lib/Store")

describe("Store", () => {
  describe("Instantiation", () => {
    it("should instantiate correctly", () => {
      // TODO: make sure an object is instantiated
      const testStore = new Store('abcd', 5, 12);
        expect(testStore.name).toBe('abcd');
        expect(testStore.opens).toBe(5);
        expect(testStore.closes).toBe(12);
    })
  })

  describe("Name property", () => {
    it("should set the name property correctly", () => {
      // TODO (see "it" statement )
      const store = new Store('abcd');
      expect(store.name).toBe('abcd');
    })
  })

  describe("Add product to inventory", () => {
    it("should add a product to inventory correctly", () => {
      // TODO (see "it" statement )
    })
  })
})