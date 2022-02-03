const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.headers["access-token"]) {
    res.status(200).send([
      {
        username: "hectorpaul@gmail.com",
        password: "1234"
      }
    ]);
  }
});

router.get("/:adminId", (req, res) => {
  if (req.headers["access-token"]) {
    res.status(200).send({
      username: "hectorpaul@gmail.com",
      password: "1234"
    });
  }
});

module.exports = router;
