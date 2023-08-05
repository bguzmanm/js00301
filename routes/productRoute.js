const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/", productController.findAll);
router.get("/:id", productController.findOne);
router.post("/", productController.new);
router.patch("/", productController.update);
router.delete("/:id", productController.delete);

module.exports = router;