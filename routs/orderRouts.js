const express = require("express");

const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, orderController.getAllOrders)
  .post(orderController.addOrder);

router
  .route("/new/:date/:id")
  .get(authController.protect, orderController.getNewOrders);

router
  .route("/:id")
  .delete(authController.protect, orderController.deleteOrder);

module.exports = router;
