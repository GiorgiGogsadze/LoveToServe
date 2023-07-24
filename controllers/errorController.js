const AppError = require("../utils/appError");

const sendError = (req, res, err) => {
  console.log("🎈", err);
  // if (req.originalUrl.startsWith("/api")) {
  res.status(err.statusCode).json({
    status: err.status,
    message: `💥 ${err.message}`,
    stack: err.stack,
    error: err,
    operational: err.isOperational || false,
  });
  // } else {
  //   res
  //     .status(err.statusCode)
  //     .render("error", { title: "Something went wrong", msg: err.message });
  // }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  sendError(req, res, err);
};
