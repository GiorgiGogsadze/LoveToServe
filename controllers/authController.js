const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const catchAssync = require("../utils/catchAssync");
const AppError = require("../utils/appError");

const createSendToken = (res) => {
  const token = jwt.sign({ id: process.env.ADMIN_ID }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    // secure: true,
  };
  res.cookie("jwt", token, cookieOptions);
  res.status(200).json({
    status: "success",
    token,
  });
};

exports.login = catchAssync(async (req, res, next) => {
  const { password } = req.body;

  if (!password) return next(new AppError("Please provide a password!", 400));

  if (password !== process.env.ADMIN_PASSWORD)
    return next(new AppError("Incorrect password", 401));

  createSendToken(res);
});

exports.logout = (req, res, next) => {
  res.cookie("jwt", "", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};

exports.isLoggedIn = catchAssync(async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    if (!token) {
      req.isLoggedIn = false;
      return next();
      // return next(
      //   new AppError("You are not logged in, please log in to get access", 401)
      // );
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    if (decoded.id !== process.env.ADMIN_ID) {
      req.isLoggedIn = false;
      return next();
      // return next(
      //   new AppError(
      //     "Something went wrong, please log in again to get access",
      //     401
      //   )
      // );
    }
    req.isLoggedIn = true;
    return next();
  } catch (err) {
    console.log(err.message);
    req.isLoggedIn = false;
    return next();
  }
});

exports.protect = catchAssync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError("You are not logged in, please log in to get access", 401)
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  if (decoded.id !== process.env.ADMIN_ID) {
    return next(
      new AppError(
        "Something went wrong, please log in again to get access",
        401
      )
    );
  }
  next();
});
