const Problem = require("../models/problemModel");
const factory = require("./handlerFactory");
const catchAssync = require("../utils/catchAssync");
exports.getAllProblems = factory.getAll(Problem);

let targetProxy = {};

exports.postProblem = catchAssync(async (req, res, next) => {
  const newDoc = await Problem.create(req.body);
  targetProxy.hasnew = true;
  console.log("heeey");
  res.status(201).json({
    status: "success",
    data: newDoc,
  });
});

exports.deleteProblem = factory.deleteOne(Problem);

exports.getNewProblems = catchAssync(async (req, res, next) => {
  targetProxy = new Proxy(
    {},
    {
      set: async function (target, key, value) {
        const newProblems = await Problem.find({
          date: { $gte: req.params.date },
          _id: { $ne: req.params.id },
        });
        try {
          res.status(200).json({
            status: "success",
            results: newProblems.length,
            data: newProblems,
          });
        } catch (err) {
          console.log(err);
          if (err.code !== "ERR_HTTP_HEADERS_SENT") {
            res.status(404).json({ status: "fail" });
          }
        }
      },
    }
  );
});
