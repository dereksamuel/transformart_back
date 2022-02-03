/* eslint-disable no-undef */

const { assert } = require("chai");
const request = require("supertest");

describe("---- CATEGORIES SUITE ----", () => {
  let categories = [];
  // let category;

  describe("MODEL OF A CATEGORY OBJECT", () => {
    // FIXME: With joi
    describe("/api/v1/categories GET", () => {
      it("All Ok 200", async () => {
        categories = await request(app)
          .get("/api/v1/categories")
          .expect("Content-Type", /json/)
          .expect(200);
        categories = categories.body;
      });
  
      it("categories type and content", () => {
        assert.typeOf(categories, "array", "type of categories must be a object");
        assert.isOk(categories);
        assert.notEqual(categories.length, 0, "categories has content");
      });
    });
  });
});
