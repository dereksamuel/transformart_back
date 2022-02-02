const { app, pool } = require("../");

// eslint-disable-next-line no-undef
before((done) => {
  global.app = app;
  global.pool = pool;
  done();
});
