const { app, pool } = require("../");

// eslint-disable-next-line no-undef
before((done) => {
  global.token = "a4s5a4s5a4s54ds7fvdf-sfd87sa-sa778";
  global.app = app;
  global.pool = pool;
  done();
});
