const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/user/new", userController.createUser);
router.get("/user/all", userController.showUser);
router.patch("/user/update", userController.updateUser);

module.exports = router;