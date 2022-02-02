const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json([
    {
      id: "4a5415498798s5aasassa4s5as",
      name: "My product",
      price: 45.23166889,
      offer: 5,
      imgSrc: "",
      videoSrc: "",
      refeerLinks: [],
      categoriesIds: [
        "45a4s5a4s5as",
        "459874545"
      ]
    },
    {
      id: "4a54s5a4s5as",
      name: "My product 2",
      price: 4523.16,
      offer: 0,
      imgSrc: "",
      videoSrc: "",
      refeerLinks: [],
      categoriesIds: [
        "45a4s5a4s5as"
      ]
    }
  ]);
});

router.get("/:productId", (req, res) => {
  const { productId } = req.params;

  res.status(200).json({
    id: productId,
    name: "My product",
    price: 45.23166889,
    offer: 5,
    imgSrc: "",
    videoSrc: "",
    refeerLinks: [],
    categoriesIds: [
      "45a4s5a4s5as",
      "459874545"
    ]
  });
});

module.exports = router;
