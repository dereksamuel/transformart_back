const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json([
    {
      id: "4a5415498798s5aasassa4s5as",
      name: "My category",
      price: 45.23166889,
      offer: 5,
      imgSrc: "",
      videoSrc: "",
      refeerLinks: [],
      productsIds: [
        "45a4s5a4s5as",
        "459874545"
      ]
    },
    {
      id: "4a54s5a4s5as",
      name: "My category 2",
      price: 4523.16,
      offer: 0,
      imgSrc: "",
      videoSrc: "",
      refeerLinks: [],
      productsIds: [
        "45a4s5a4s5as"
      ]
    }
  ]);
});

router.get("/:categoryId", (req, res) => {
  const { categoryId } = req.params;

  res.status(200).json({
    id: categoryId,
    name: "My category",
    price: 45.23166889,
    offer: 5,
    imgSrc: "",
    videoSrc: "",
    refeerLinks: [],
    productsIds: [
      "45a4s5a4s5as",
      "459874545"
    ]
  });
});

module.exports = router;
