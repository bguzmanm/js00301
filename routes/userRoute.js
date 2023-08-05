const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/new", userController.createUser);
router.get("/all", userController.showUser);
router.patch("/update", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;