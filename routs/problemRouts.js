const express = require("express");

const problemController = require("../controllers/problemController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, problemController.getAllProblems)
  .post(problemController.postProblem);

router
  .route("/new/:date/:id")
  .get(authController.protect, problemController.getNewProblems);

router
  .route("/:id")
  .delete(authController.protect, problemController.deleteProblem);

module.exports = router;
