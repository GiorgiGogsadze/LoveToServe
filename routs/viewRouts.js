const express = require("express");
const viewsController = require("../controllers/viewsController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", viewsController.getMainPage);

router.get(
  "/admin/orders",
  authController.isLoggedIn,
  viewsController.getOrderPage
);
router.get(
  "/admin/problems",
  authController.isLoggedIn,
  viewsController.getProblemPage
);
router.get("/admin", (req, res, next) => {
  res.redirect("/admin/orders");
});

router.get("/login", viewsController.getLoginPage);

module.exports = router;
