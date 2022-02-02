/* eslint-disable no-undef */
/*eslint no-undef: "error"*/

let expect = require("chai").expect;

describe("---- SERVER SUITE ----", () => {
  describe("CONNECTION WITH SERVER", () => {
    it("verifing that the port is correct", () => {
      expect(Number(app.get("port"))).to.equal(4000);
    });
  
    it("My environment is equal to dev", () => {
      expect(process.env.ENVIRONMENT).to.equal("dev");
    });
  });

  describe("DB OK FOR USAGE", () => {
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
  
    describe("-- connection with mysql is successfuly --", () => {
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
  
    it("db transformart exists", (done) => {
      pool.query("SHOW DATABASES")
        .then((dbs) => {
          expect(dbs.find((db) => db.Database === "transformart")).to.not.equal(undefined);
          done();
        })
        .catch(done);
    });
  });
});
