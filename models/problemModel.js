const mongoose = require("mongoose");

const problemSchema = mongoose.Schema({
  problemLevel: {
    type: String,
    required: true,
    enum: ["საგანგაშო", "საყურადღებო", "მცირე დისკომფორტის შემქმნელი"],
  },
  message: { type: String, required: true },
  table: { type: Number, required: true },
  date: { type: Number, required: true },
});

problemSchema.pre(/^find/, function (next) {
  this.sort("-date");
  next();
});

const Problem = mongoose.model("Problem", problemSchema);
// (async () => await Problem.deleteMany())();
module.exports = Problem;
