const path = require("path");
const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");

const AppError = require("./utils/appError");

const orderRouter = require(`./routs/orderRouts`);
const problemRouter = require(`./routs/problemRouts`);
const viewRouter = require(`./routs/viewRouts`);
const adminRouter = require(`./routs/adminRouts`);

const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// app.use(helmet());

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this Ip, please try again",
});
app.use("/api", limiter);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

app.use(mongoSanitize());

// ROUTES
app.use(`/`, viewRouter);
//api routs
app.use(`/api/v1/orders`, orderRouter);
app.use(`/api/v1/problems`, problemRouter);
app.use(`/api/v1/admin`, adminRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
