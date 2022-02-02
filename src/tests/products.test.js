/* eslint-disable no-undef */
const { assert } = require("chai");
const request = require("supertest");

describe("---- PRODUCTS SUITE ----", () => {
  let products = [];
  let product;

  describe("MODEL OF A PRODUCT OBJECT", () => {
    // FIXME: With joi
  });

  describe("/api/v1/products GET", () => {
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
    it("All Ok 200", async () => {
      product = await request(app)
        .get("/api/v1/products/:productId")
        .expect("Content-Type", /json/)
        .expect(200);
    });

    it("product be the selected product in a list --it is only for LOCAL", () => {
      assert.equal(products.find((localProduct) => localProduct.id === product.id), product.id);
    });

    it("product must be relation with category or categories", () => {
      //FIXME: product.categories tener misma estructura que Category of joi
    });
  });
});
