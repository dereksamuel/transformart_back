const app = require("../");
let expect = require("chai").expect;

describe("Connection with server", () => {
  it("verifing that the port is correct", () => {
    expect(Number(app.get("port"))).to.equal(4000);
  });

  it("My environment equal to dev", () => {
    expect(process.env.ENVIRONMENT).to.equal("dev");
  });

  after(() => {
    console.log("My tests SERVER finished");
  });
});
