const os = require("os");

const { app, pool } = require("../");
let expect = require("chai").expect;

describe("Connection with server", () => {
  it("verifing that the port is correct", () => {
    console.log(os.hostname());
    expect(Number(app.get("port"))).to.equal(4000);
  });

  it("My environment is equal to dev", () => {
    expect(process.env.ENVIRONMENT).to.equal("dev");
  });

  describe("DB Connection", () => {
    let connection = null;

    before((done) => {
      pool.getConnection((error, connectionDB) => {
        if (error) {
          throw new Error("the db connection fail", error);
        }
  
        connection = connectionDB;
        connectionDB.release();
        done();
      });
    });

    it("status of user must be equal to authenticated", () => {
      expect(connection.state).to.equal("authenticated");
    });

    it("verifing that config is for environment dev", () => {
      expect(connection.config.user).to.equal(process.env.SQL_USER);
      expect(connection.config.password).to.equal(process.env.SQL_PASSWORD);
      expect(connection.config.host).to.equal(process.env.SQL_HOST);
      expect(connection.config.database).to.equal(process.env.SQL_DATABASE);
    });
  });

  after(() => {
    console.log("My tests SERVER finished");
  });
});
