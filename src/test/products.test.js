const { assert } = require("chai");
const request = require("supertest");

describe("---- PRODUCTS SUITE ----", () => {
  describe("/api/v1/products GET", () => {
    let products;
    it("All Ok 200", async () => {
      products = await request(app)
        .get("/api/v1/products")
        .expect("Content-Type", /json/)
        .expect(200);
    });

    it("products type and content", () => {
      assert.typeOf(products, "object", "type of products must be a object");
      assert.isOk(products);
      assert.notEqual(products.length, 0, "products has content");
    });
  });

  describe("/api/v1/products/:productId GET", () => {
    let product;
    it("All Ok 200", async () => {
      product = await request(app)
        .get("/api/v1/products/:productId")
        .expect("Content-Type", /json/)
        .expect(200);
    });

    it("product must be relation with category or categories", () => {
      // product.categories tener misma estructura que Category of joi
    });
  });
});
