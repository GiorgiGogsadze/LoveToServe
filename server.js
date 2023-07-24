const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const ip = require("ip");

process.on("uncaughtException", (err) => {
  console.log(err);
  console.log("UNHANDELED EXCEPTION 💣 Shutting down...");
  process.exit(1);
});

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful!");
  });

const address = ip.address();
// const address = "127.0.0.1";
const port = process.env.PORT || 3000;
const server = app.listen(port, address, () => {
  console.log(`App running on ${address}:${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  console.log("UNHANDELED REJECTION! 💣 Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
