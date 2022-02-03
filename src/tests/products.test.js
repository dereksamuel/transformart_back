/* eslint-disable no-undef */
const { assert } = require("chai");
const request = require("supertest");

describe("---- PRODUCTS SUITE ----", () => {
  let products = [];
  let product;

  let unsplashImageSrc;
  let unsplashVideoSrc;

  describe("MODEL OF A PRODUCT OBJECT", () => {
    // FIXME: With joi
  });

  describe("/api/v1/products GET", () => {
    it("All Ok 200", async () => {
      products = await request(app)
        .get("/api/v1/products")
        .expect("Content-Type", /json/)
        .expect(200);
      products = products.body;
    });

    it("products must be an array and must has an any content", () => {
      assert.typeOf(products, "array", "type of products must be a object");
      assert.isOk(products);
      assert.notEqual(products.length, 0, "products has content");
    });
  });

  describe("/api/v1/products/:productId GET", () => {
    it("All Ok 200", async () => {
      product = await request(app)
        .get("/api/v1/products/4a5415498798s5aasassa4s5as")
        .expect("Content-Type", /json/)
        .expect(200);
      product = product.body;
    });

    it("product be the selected product in a list --it is only for LOCAL", () => {
      const productSearch = products.find((localProduct) => localProduct.id === product.id);
      assert.isOk(productSearch);
      assert.equal(productSearch.id, product.id);
    });
  });

  describe("/api/v1/products/uploadAssets POST", () => {
    it("All Ok 201", async () => {
      const response = await request(app)
        .post("/api/v1/products/create")
        .send({
          imgSrc: "https://blog.powerdata.es/hs-fs/hubfs/images/Dynamic_Data_Masking.jpg?width=1024&name=Dynamic_Data_Masking.jpg",
          videoSrc: "https://repositorio.konradlorenz.edu.co/micrositios/001-985/mtodos_estticos.html"
        })
        .expect(201);

      const { imageSrcUploaded, videoSrcUploaded } = response.body;

      unsplashImageSrc = imageSrcUploaded;
      unsplashVideoSrc = videoSrcUploaded;
    });

    it("uploaded img and video to the correct domain", () => {
      // eslint-disable-next-line no-useless-escape
      const domainRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]twitter+)\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
      
      assert.isTrue(domainRegex.test(unsplashImageSrc));
      assert.isTrue(domainRegex.test(unsplashVideoSrc));
    });
  });

  describe("/api/v1/products/create POST", () => {
    it("All Ok 201", async () => {
      product = await request(app)
        .post("/api/v1/products/create")
        .send({
          name: "Product test",
          price: 4523.16,
          offer: 0,
          imgSrc: unsplashImageSrc,
          videoSrc: unsplashVideoSrc,
          refeerLinks: [
            "https://facebook.com/product_test",
            "https://instagram.com/product_test"
          ],
          categoryId: "123a1sa231saafdf=fg45"
        })
        .expect(201);
      product = product.body;
    });
  });
});

// FIXME: Acceder a AWS CONNECT TOMORROW
