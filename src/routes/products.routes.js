const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      name: "My product",
      price: 45.23166889,
      offer: 5,
      imgSrc: "",
      videoSrc: "",
      refeerLinks: [],
      categories: []
    },
    {
      name: "My product",
      price: 45.23166889,
      offer: 5,
      imgSrc: "",
      videoSrc: "",
      refeerLinks: [],
      categories: []
    }
  ]);
});

module.exports = router;
