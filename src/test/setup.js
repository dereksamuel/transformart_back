const { app, pool } = require("../");

before((done) => {
  global.app = app;
  global.pool = pool;
  done();
});
