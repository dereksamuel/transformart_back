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

router.post("/uploadAssets", (req, res) => {
  //FIXME: ADD THIS AND FILES const { imgSrc, videoSrc } = req.body;

  res.status(201).send({
    imageSrcUploaded: "https://www.w3schools.com/tags/img_girl.jpg",
    videoSrcUploaded: "https://www.w3schools.com/tags/movie.mp4"
  });
});


router.post("/create", (req, res) => {
  res.status(201).send({
    message: "product created",
    body: req.body,
  });
});

module.exports = router;
