const catchAsync = require("../utils/catchAssync");
const AppError = require("../utils/appError");

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(
        new AppError(`No document found with id: ${req.params.id}`, 404)
      );
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const newDoc = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      data: newDoc,
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.find();
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: doc,
    });
  });
